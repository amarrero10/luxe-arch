import { Suspense } from "react";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 gap-stack-lg">
      <Link href="/" className="text-headline-md font-bold text-primary tracking-tight">
        LUXE ARCH
      </Link>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
