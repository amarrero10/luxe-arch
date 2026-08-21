import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found - Luxe Arch",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header active="" />

      <main className="flex-1 flex items-center justify-center px-6 py-section-gap">
        <Reveal className="flex flex-col items-center text-center max-w-md" y={20}>
          <span className="material-symbols-outlined text-primary text-[56px] mb-stack-md">
            signpost
          </span>
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">
            404
          </h1>
          <p className="text-headline-md font-semibold text-on-surface mt-2">
            This address isn&rsquo;t on the map.
          </p>
          <p className="text-body-md text-on-surface-variant mt-3">
            The page you&rsquo;re looking for may have been moved, sold, or never
            existed. Let&rsquo;s get you back to browsing.
          </p>

          <div className="flex flex-col sm:flex-row gap-stack-sm mt-stack-lg">
            <Link
              href="/"
              className="bg-primary text-on-primary text-label-md font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 active:scale-[0.97] transition-all"
            >
              Back to Discover
            </Link>
            <Link
              href="/agents"
              className="border border-outline text-on-surface text-label-md font-semibold px-8 py-4 rounded-lg hover:bg-surface-container-low transition-all"
            >
              Meet Our Agents
            </Link>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
