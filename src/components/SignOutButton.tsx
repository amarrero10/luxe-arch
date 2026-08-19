"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-surface-variant hover:border-primary transition-colors text-label-md font-semibold text-on-surface"
    >
      <span className="material-symbols-outlined text-[18px]">logout</span>
      Sign Out
    </button>
  );
}
