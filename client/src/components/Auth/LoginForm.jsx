import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

import googleLogo from "../../assets/google.svg";

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
  onSubmit,
}) {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
    >
      {/* Google Login */}

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm"
      >
        <img
          src={googleLogo}
          alt="Google"
          className="h-5 w-5"
        />

        Continue with Google
      </button>

      {/* Divider */}

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-200" />

        <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
          OR
        </span>

        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* Email */}

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Email
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Password */}

      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200"
          />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-11 text-sm outline-none transition-all duration-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 hover:text-blue-600"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me */}

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) =>
              setRememberMe(
                e.target.checked
              )
            }
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />

          Remember me
        </label>

        <button
          type="button"
          className="text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
        >
          Forgot Password?
        </button>
      </div>

      {/* Login */}

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-95"
      >
        Login →
      </button>

      {/* Footer */}

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
}

export default LoginForm;