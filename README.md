# CodeSync — Full-Stack Technical Interview Platform

CodeSync is a modern, real-time technical interview platform built with **Next.js 14**, **TypeScript**, **Convex**, **Clerk**, and **Stream Video SDK**. It enables seamless remote technical interviews with live video calling, audio streaming, screen sharing, real-time code editor integration, interview scheduling, and candidate evaluations.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router, Server Actions, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Shadcn UI
- **Database & Backend:** Convex (Reactive WebSocket Database)
- **Authentication:** Clerk (JWT Templates, Role-Based Access Control, Webhooks)
- **Video & Audio SDK:** Stream Video React SDK
- **Code Editor:** Monaco Editor
- **Icons & UI:** Lucide React, Date-fns, React Hot Toast

---

## Key Features

- **🔒 Authentication & Role Management:** Secure login via Clerk supporting Interviewer and Candidate roles.
- **🎥 Real-Time Video Calling:** High-quality WebRTC video and audio streams powered by Stream Video SDK.
- **🖥️ Screen Sharing:** One-click screen sharing for live coding demonstrations and presentation reviews.
- **💻 Synchronized Code Editor:** In-browser IDE powered by Monaco Editor for real-time collaborative coding during interviews.
- **📅 Interview Scheduling & Dashboard:**
  - **Interviewer View:** Schedule interviews, assign candidates, specify time slots, and evaluate past sessions (Pass/Fail + Comments).
  - **Candidate View:** View upcoming scheduled interviews and join live rooms.
- **🎬 Session Recordings:** Access past interview recordings and playback session logs.
- **🌓 Dynamic UI & Dark Mode:** Responsive layout with dark/light mode toggle powered by `next-themes`.

---

## 📁 Repository Structure

```
Interview-Platform/
├── convex/                   # Backend schema & serverless functions
│   ├── auth.config.ts        # Clerk-Convex JWT configuration
│   ├── schema.ts             # Convex database tables (users, interviews, comments)
│   ├── users.ts              # User queries and mutations
│   ├── interviews.ts         # Interview scheduling & status mutations
│   ├── comments.ts           # Interviewer feedback & scoring
│   └── http.ts               # Clerk webhook endpoints
├── src/
│   ├── actions/              # Server actions (Stream token generation)
│   ├── app/                  # Next.js 14 App Router pages
│   │   ├── (admin)/dashboard # Interviewer dashboard
│   │   ├── (root)/(home)     # Candidate & upcoming meetings view
│   │   ├── (root)/meeting    # Live video call & code editor room
│   │   ├── (root)/schedule   # Scheduling modal & calendar view
│   │   └── (root)/recordings # Past call recordings page
│   ├── components/           # Reusable UI components
│   ├── hooks/                # Custom React hooks (roles, meetings)
│   └── lib/                  # Helper utilities & date formatting
├── public/                   # Static assets & images
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.x or later
- **npm** or **pnpm**
- **Clerk Account**: For authentication & JWT templates
- **Convex Account**: For backend database
- **Stream Account**: For Video API key and secret

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<YOUR_USERNAME>/Interview-Platform.git
   cd Interview-Platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   CLERK_JWT_ISSUER_DOMAIN=https://<YOUR_CLERK_ISSUER>.clerk.accounts.dev
   CLERK_WEBHOOK_SECRET=whsec_...

   NEXT_PUBLIC_CONVEX_URL=https://<YOUR_CONVEX_PROJECT>.convex.cloud
   CONVEX_DEPLOYMENT=dev:...

   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET_KEY=your_stream_secret_key
   ```

4. **Initialize Convex Backend:**
   ```bash
   npx convex dev
   ```

5. **Start Next.js Development Server:**
   ```bash
   npm run dev
   ```

6. Open `http://localhost:3000` in your browser.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
