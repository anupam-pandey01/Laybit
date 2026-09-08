import SignUpForm from "@/components/Auth/SignUpForm";

export const metadata = {
  title: "Sign Up",
  description: "Create your Laybit account and get started with developer tools.",
};

export default function SignUpPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-glow-primary absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full" />
        <div className="bg-glow-accent absolute -bottom-40 -right-20 h-[360px] w-[520px] rounded-full" />
      </div>

      {/* Centered sign-up form */}
      <div className="flex w-full justify-center">
        <SignUpForm />
      </div>
    </main>
  );
}
