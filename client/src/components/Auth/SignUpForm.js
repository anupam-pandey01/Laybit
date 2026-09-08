"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Loader2,
  Mail,
  ShieldCheck,
  User as UserIcon,
  AtSign,
  KeyRound,
  PartyPopper,
} from "lucide-react";

const inputBase =
  "w-full rounded-lg border border-border bg-surface/60 px-4 py-2.5 pl-10 text-sm text-text placeholder:text-text-muted transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

function Field({ icon: Icon, label, id, type = "text", ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-text-secondary">
        {label}
      </label>
      <div className="relative">
        <Icon
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        />
        <input id={id} type={type} className={inputBase} {...props} />
      </div>
    </div>
  );
}

export default function SignUpForm() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Demo OTP shown in the UI for testing — replace with a real API call later.
  const demoOtp = "482913";

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const validateDetails = () => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
    if (!/^[a-zA-Z0-9_]{3,20}$/.test(form.username))
      return "Username must be 3–20 characters (letters, numbers, underscores).";
    if (form.password.length < 8) return "Password must be at least 8 characters.";
    return "";
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    const validationError = validateDetails();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setSendingOtp(true);
    // Simulate sending OTP to the email address.
    setTimeout(() => {
      setSendingOtp(false);
      setOtpSent(true);
      setStep(2);
    }, 1200);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (form.otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }
    setError("");
    setVerifying(true);
    // Simulate verification against the demo OTP.
    setTimeout(() => {
      setVerifying(false);
      if (form.otp === demoOtp) {
        setCompleted(true);
        console.log("Sign-up payload:", {
          name: form.name,
          email: form.email,
          username: form.username,
          password: form.password,
        });
      } else {
        setError("Invalid OTP. Try again.");
      }
    }, 1000);
  };

  return (
    <div className="w-full max-w-md">
      <AnimatePresence mode="wait">
        {completed ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="glass rounded-2xl border-border p-8 text-center shadow-[0_0_60px_rgba(99,102,241,0.15)]"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success/15">
              <PartyPopper className="text-success" size={28} />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-text">
              Account created!
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Welcome aboard, <span className="font-semibold text-text">{form.name}</span>. Your
              username <span className="font-mono text-primary">@{form.username}</span> is ready to
              go.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover"
            >
              Continue to dashboard
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        ) : (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass rounded-2xl border-border p-8 shadow-[0_0_60px_rgba(99,102,241,0.15)]"
          >
            {/* Step indicator */}
            <div className="mb-6 flex items-center gap-2">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                      step >= s
                        ? "bg-primary text-white"
                        : "bg-surface text-text-muted"
                    }`}
                  >
                    {step > s ? <Check size={14} /> : s}
                  </div>
                  {s === 1 && <div className="h-px w-8 bg-border" />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <>
                <h2 className="text-2xl font-semibold tracking-tight text-text">Create your account</h2>
                <p className="mt-1 mb-6 text-sm text-text-secondary">
                  Fill in your details below to get started with Laybit.
                </p>

                <form onSubmit={handleSendOtp} className="space-y-4" noValidate>
                  <Field
                    icon={UserIcon}
                    label="Full name"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Field
                    icon={Mail}
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <Field
                    icon={AtSign}
                    label="Username"
                    id="username"
                    name="username"
                    placeholder="johndoe_01"
                    autoComplete="username"
                    value={form.username}
                    onChange={handleChange}
                  />
                  <div>
                    <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-text-secondary">
                      Password
                    </label>
                    <div className="relative">
                      <KeyRound
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                      />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="At least 8 characters"
                        autoComplete="new-password"
                        value={form.password}
                        onChange={handleChange}
                        className={`${inputBase} pr-10`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted transition-colors hover:text-text"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-400">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sendingOtp}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sendingOtp ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending OTP…
                      </>
                    ) : (
                      <>
                        Send OTP
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}

            {step === 2 && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setError("");
                  }}
                  className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text"
                >
                  <ArrowLeft size={15} />
                  Back to details
                </button>

                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
                    <ShieldCheck className="text-primary" size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-text">Verify your email</h2>
                    <p className="text-xs text-text-secondary">
                      We sent a 6-digit code to <span className="text-text">{form.email}</span>
                    </p>
                  </div>
                </div>

                <form onSubmit={handleVerifyOtp} className="mt-6 space-y-4" noValidate>
                  <div>
                    <label htmlFor="otp" className="mb-1.5 block text-sm font-medium text-text-secondary">
                      OTP code
                    </label>
                    <input
                      id="otp"
                      name="otp"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      placeholder="000000"
                      value={form.otp}
                      onChange={(e) =>
                        handleChange({
                          target: {
                            name: "otp",
                            value: e.target.value.replace(/\D/g, "").slice(0, 6),
                          },
                        })
                      }
                      className={`${inputBase} text-center font-mono text-lg tracking-[0.5em]`}
                    />
                  </div>

                  {error && (
                    <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-400">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={verifying}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {verifying ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Verifying…
                      </>
                    ) : (
                      <>
                        Verify & create account
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-text-muted">
                    Demo OTP: <span className="font-mono font-semibold text-primary">{demoOtp}</span>
                  </p>
                </form>
              </>
            )}

            <p className="mt-6 text-center text-sm text-text-muted">
              Already have an account?{" "}
              <Link href="#" className="font-medium text-primary hover:text-primary-hover">
                Sign in
              </Link>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
