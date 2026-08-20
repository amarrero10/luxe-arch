import { headers } from "next/headers";
import { redirect, notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyForm from "@/components/PropertyForm";
import { getAuth } from "@/lib/auth";
import { getPropertyById } from "@/lib/properties";

export default async function EditListingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect(`/login?redirect=/dashboard/listings/${id}/edit`);
  }

  const property = await getPropertyById(id);
  if (!property) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="Dashboard" />
      </div>

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-stack-lg">
        <div className="border-b border-outline-variant pb-4">
          <h1 className="text-headline-lg font-bold text-primary tracking-tight">
            Edit Listing
          </h1>
          <p className="text-body-md text-on-surface-variant mt-2">{property.address}</p>
        </div>

        <PropertyForm agentId={property.agentId} property={property} />
      </main>

      <Footer />
    </div>
  );
}
