import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";

export const useUserRole = () => {
  const { user, isLoaded } = useUser();
  const syncUser = useMutation(api.users.syncUser);

  const userData = useQuery(
    api.users.getUserByClerkId,
    user?.id ? { clerkId: user.id } : "skip"
  );

  useEffect(() => {
    if (user && isLoaded && userData === null) {
      syncUser({
        clerkId: user.id,
        email: user.primaryEmailAddress?.emailAddress || "",
        name: user.fullName || user.firstName || "User",
        image: user.imageUrl,
      });
    }
  }, [user, isLoaded, userData, syncUser]);

  const isLoading = !isLoaded || userData === undefined;

  return {
    isLoading,
    isInterviewer: userData?.role === "interviewer" || userData === null,
    isCandidate: userData?.role === "candidate",
  };
};
