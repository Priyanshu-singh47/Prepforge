import { GraduationCap } from "lucide-react";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative flex min-h-screen items-start justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 pt-8 pb-6">
      {/* Background Blobs */}

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-300/25 blur-3xl" />

      {/* Card */}

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/80 p-7 shadow-2xl backdrop-blur-xl">
        {/* Logo */}

        <div className="mb-5 flex items-center justify-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
            <GraduationCap size={22} />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            PrepForge
          </h1>
        </div>

        {/* Heading */}

        <div className="mb-5 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        {/* Forms */}

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;