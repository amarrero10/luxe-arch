"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "@/lib/auth-client";

const DEMO_EMAIL = "agent@luxearch.demo";
const DEMO_PASSWORD = "LuxeArchDemo2026!";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signInError } = await signIn.email({ email, password });

    setLoading(false);

    if (signInError) {
      setError(signInError.message || "Invalid email or password.");
      return;
    }

    router.push(redirectTo);
    router.refresh();
  }

  return (
    <div className="w-full max-w-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-surface-container-lowest rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.04)] border border-outline-variant/20 p-gutter flex flex-col gap-stack-sm"
      >
        <h1 className="text-headline-md font-semibold text-primary mb-1">Agent Sign In</h1>

        <label className="flex flex-col gap-1">
          <span className="text-label-md font-semibold text-on-surface-variant">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-label-md font-semibold text-on-surface-variant">Password</span>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
          />
        </label>

        {error && <p className="text-label-md font-semibold text-error">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-on-primary text-label-md font-semibold py-4 rounded-lg mt-2 hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-body-md text-on-surface-variant text-center mt-1">
          Demo account is pre-filled — just hit Sign In.
        </p>
      </form>
    </div>
  );
}
