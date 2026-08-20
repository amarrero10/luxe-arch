import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewListingForm from "@/components/NewListingForm";
import { getAuth } from "@/lib/auth";
import { getAgents } from "@/lib/agents";

export default async function NewListingPage() {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login?redirect=/dashboard/listings/new");
  }

  const agents = await getAgents();
  const agentId = agents[0]?.id ?? "";

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="Dashboard" />
      </div>

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-stack-lg">
        <div className="border-b border-outline-variant pb-4">
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">New Listing</h1>
          <p className="text-body-md text-on-surface-variant mt-2">
            Add a property to the active listings roster.
          </p>
        </div>

        <NewListingForm agentId={agentId} />
      </main>

      <Footer />
    </div>
  );
}
