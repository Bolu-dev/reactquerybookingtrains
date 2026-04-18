import { useState } from "react";
import { useLogin } from "../features/auth/useLogin";
import { useSignup } from "../features/auth/useSignup";
import Button from "../ui/Button";

function LoginPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isPending: isLoggingIn, loginUser } = useLogin();
  const { isPending: isSigningUp, signupUser } = useSignup();

  const isWorking = isLoggingIn || isSigningUp;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    if (isLoginMode) {
      loginUser({ email, password });
    } else {
      signupUser({ email, password, fullName });
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/newtrain2.png')" }}
    >
      {/* Warm gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/40 to-orange-900/60" />

      {/* Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-md border border-white/20">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-train-orange tracking-widest uppercase text-center mb-2">
          Train.io
        </h1>
        <p className="text-center text-white/70 text-sm mb-8">
          {isLoginMode ? "Welcome back! 👋" : "Create your account 🚀"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name — signup only */}
          {!isLoginMode && (
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-white">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                disabled={isWorking}
                onChange={(e) => setFullName(e.target.value)}
                className="rounded-full bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-train-orange/50"
              />
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              disabled={isWorking}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-train-orange/50"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-white">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              disabled={isWorking}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-full bg-white/20 border border-white/30 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-train-orange/50"
            />
          </div>

          {/* Submit */}
          <Button type="primary" disabled={isWorking}>
            {isWorking
              ? "Please wait..."
              : isLoginMode
                ? "Login"
                : "Create Account"}
          </Button>
        </form>

        {/* Toggle */}
        <p className="text-center text-sm text-white/50 mt-6">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLoginMode((mode) => !mode)}
            className="text-train-orange font-semibold ml-1 hover:underline"
          >
            {isLoginMode ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
