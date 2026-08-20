import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyGallery from "@/components/PropertyGallery";
import ContactAgentForm from "@/components/ContactAgentForm";
import MortgageCalculator from "@/components/MortgageCalculator";
import PropertyLocationMap from "@/components/PropertyLocationMapLoader";
import Reveal from "@/components/Reveal";
import { getProperties, getPropertyById } from "@/lib/properties";
import { getAgentById } from "@/lib/agents";
import { formatCityState, formatPrice } from "@/lib/format";

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = await getPropertyById(id);
  if (!property) return { title: "Property Not Found - Luxe Arch" };
  return {
    title: `${property.address} - Luxe Arch`,
    description: property.description[0],
  };
}

export default async function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    notFound();
  }

  const agent = await getAgentById(property.agentId);

  if (!agent) {
    notFound();
  }

  const fullAddress = `${property.address}, ${formatCityState(property)}`;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="Discover" />
      </div>

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-stack-lg md:py-section-gap flex flex-col gap-section-gap">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-label-md font-semibold text-on-surface-variant hover:text-primary transition-colors w-fit"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to search
        </Link>

        <section className="flex flex-col gap-stack-md">
          <div className="flex flex-col md:flex-row justify-between items-start gap-stack-sm md:gap-0">
            <div>
              <h1 className="text-display-lg font-bold text-primary mb-stack-sm">
                {property.address}
              </h1>
              <p className="text-body-lg text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined">location_on</span>
                {formatCityState(property)} {property.zip}
              </p>
            </div>
            <div className="text-right">
              <div className="text-price-display font-bold text-primary">
                {formatPrice(property.price)}
              </div>
              <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full mt-2 text-label-md font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {property.status}
              </div>
            </div>
          </div>

          <PropertyGallery images={property.gallery} alt={fullAddress} />

          <div className="flex flex-wrap items-center gap-gutter py-stack-md border-b border-outline-variant">
            <div className="flex items-center gap-2 text-secondary text-label-md font-semibold">
              <span className="material-symbols-outlined">bed</span>
              {property.beds} Beds
            </div>
            <div className="w-px h-6 bg-outline-variant hidden sm:block" />
            <div className="flex items-center gap-2 text-secondary text-label-md font-semibold">
              <span className="material-symbols-outlined">bathtub</span>
              {property.baths} Baths
            </div>
            <div className="w-px h-6 bg-outline-variant hidden sm:block" />
            <div className="flex items-center gap-2 text-secondary text-label-md font-semibold">
              <span className="material-symbols-outlined">square_foot</span>
              {property.sqft.toLocaleString("en-US")} Sqft
            </div>
            <div className="w-px h-6 bg-outline-variant hidden sm:block" />
            <div className="flex items-center gap-2 text-secondary text-label-md font-semibold">
              <span className="material-symbols-outlined">calendar_month</span>
              Built {property.yearBuilt}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter relative">
          <div className="lg:col-span-2 flex flex-col gap-stack-lg">
            <Reveal as="section">
              <h2 className="text-headline-lg font-bold text-primary mb-stack-md">
                About this Home
              </h2>
              {property.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-body-lg text-on-surface-variant leading-relaxed ${
                    index > 0 ? "mt-4" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal as="section">
              <h2 className="text-headline-lg font-bold text-primary mb-stack-md">
                Features &amp; Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                {property.features.map((category, index) => (
                  <Reveal
                    key={category.label}
                    delay={index * 0.08}
                    className="bg-surface-container-low rounded-xl p-stack-md border border-outline-variant/30"
                  >
                    <h3 className="text-headline-md font-semibold text-primary mb-stack-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary">
                        {category.icon}
                      </span>
                      {category.label}
                    </h3>
                    <ul className="space-y-2 text-body-md text-on-surface-variant">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal as="section">
              <h2 className="text-headline-lg font-bold text-primary mb-stack-md">Location</h2>
              <div className="w-full h-64 bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/20">
                <PropertyLocationMap lat={property.lat} lng={property.lng} />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-1">
            <Reveal delay={0.15} className="sticky top-24 flex flex-col">
              <ContactAgentForm
                agent={agent}
                propertyId={property.id}
                propertyAddress={property.address}
              />
              <MortgageCalculator homePrice={property.price} />
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
