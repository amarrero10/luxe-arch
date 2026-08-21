"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-surface-container-lowest w-full h-18 border-b border-on-surface-variant/10">
        <div className="flex items-center w-full h-full px-6 md:px-margin-desktop max-w-container-container-max mx-auto">
          <Link href="/" className="text-headline-md font-bold text-primary tracking-tight">
            LUXE ARCH
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-section-gap">
        <div className="flex flex-col items-center text-center max-w-md">
          <span className="material-symbols-outlined text-primary text-[56px] mb-stack-md">
            error
          </span>
          <h1 className="text-headline-md font-semibold text-on-surface">
            Something went wrong.
          </h1>
          <p className="text-body-md text-on-surface-variant mt-3">
            We hit an unexpected error loading this page. It&rsquo;s usually temporary — try again,
            or head back to browsing.
          </p>

          <div className="flex flex-col sm:flex-row gap-stack-sm mt-stack-lg">
            <button
              type="button"
              onClick={() => retry()}
              className="bg-primary text-on-primary text-label-md font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 active:scale-[0.97] transition-all"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="border border-outline text-on-surface text-label-md font-semibold px-8 py-4 rounded-lg hover:bg-surface-container-low transition-all"
            >
              Back to Discover
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
