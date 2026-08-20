import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InquiryCard from "@/components/InquiryCard";
import SignOutButton from "@/components/SignOutButton";
import { getAuth } from "@/lib/auth";
import { getInquiries } from "@/lib/inquiries";

export default async function DashboardPage() {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login?redirect=/dashboard");
  }

  const inquiries = await getInquiries();
  const newCount = inquiries.filter((inquiry) => inquiry.status === "new").length;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="Dashboard" />
      </div>

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-stack-lg">
        <div className="flex justify-between items-end border-b border-outline-variant pb-4 flex-wrap gap-4">
          <div>
            <h1 className="text-headline-lg font-bold text-primary tracking-tight">
              Recent Inquiries
            </h1>
            <p className="text-body-md text-on-surface-variant mt-2">
              Signed in as {session.user.name} • {newCount} new
            </p>
          </div>
          <div className="flex items-center gap-stack-sm">
            <Link
              href="/dashboard/listings/new"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary text-label-md font-semibold hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Add Listing
            </Link>
            <SignOutButton />
          </div>
        </div>

        {inquiries.length === 0 ? (
          <div className="text-center py-section-gap text-on-surface-variant">
            No inquiries yet. They&rsquo;ll show up here as soon as someone submits a form.
          </div>
        ) : (
          <div className="flex flex-col gap-stack-md">
            {inquiries.map((inquiry) => (
              <InquiryCard key={inquiry.id} inquiry={inquiry} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
