import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import ContactAgentForm from "@/components/ContactAgentForm";
import Reveal from "@/components/Reveal";
import { HoveredPropertyProvider } from "@/lib/hover-context";
import { getAgentById, getAgents } from "@/lib/agents";
import { getProperties } from "@/lib/properties";

export async function generateStaticParams() {
  const agents = await getAgents();
  return agents.map((agent) => ({ id: agent.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const agent = await getAgentById(id);
  if (!agent) return { title: "Agent Not Found - Luxe Arch" };
  return {
    title: `${agent.name} - Luxe Arch`,
    description: agent.bio[0],
  };
}

export default async function AgentProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = await getAgentById(id);

  if (!agent) {
    notFound();
  }

  const properties = await getProperties();
  const listings = properties.filter((property) => property.agentId === agent.id);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="Agents" />
      </div>

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-section-gap">
        <section className="flex flex-col md:flex-row gap-gutter items-start">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-3/4 w-full rounded-lg overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.04)] relative group">
              <Image
                src={agent.portrait}
                alt={agent.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-stack-lg pt-4 md:pt-12">
            <div className="flex flex-col gap-stack-sm border-b border-outline-variant/30 pb-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-display-lg font-bold text-on-surface mb-2">{agent.name}</h1>
                  <p className="text-headline-md font-normal text-on-surface-variant">
                    {agent.title}
                  </p>
                  <div className="text-secondary mt-2 flex items-center gap-1 text-label-md font-semibold">
                    <span className="material-symbols-outlined icon-fill text-sm">star</span>
                    {agent.rating.toFixed(1)} ({agent.reviews} reviews)
                  </div>
                </div>
                <a
                  href="#contact"
                  className="bg-primary hover:bg-inverse-surface active:scale-[0.97] text-on-primary text-label-md font-semibold py-3 px-8 rounded transition-all duration-300 w-full md:w-auto shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-stack-md">
              <h2 className="text-headline-lg font-bold text-on-surface">
                About {agent.name.split(" ")[0]}
              </h2>
              {agent.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-body-lg text-on-surface-variant max-w-3xl leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {agent.stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={index * 0.08}
                  className="bg-surface-container-low rounded-lg p-6 flex flex-col gap-2"
                >
                  <span className="text-display-lg font-bold text-primary">{stat.value}</span>
                  <span className="text-label-md text-on-surface-variant uppercase tracking-wider">
                    {stat.label}
                  </span>
                </Reveal>
              ))}
              <Reveal
                delay={agent.stats.length * 0.08}
                className="bg-surface-container-low rounded-lg p-6 flex flex-col gap-2"
              >
                <span className="text-display-lg font-bold text-primary">{listings.length}</span>
                <span className="text-label-md text-on-surface-variant uppercase tracking-wider">
                  Active Listings
                </span>
              </Reveal>
            </div>
          </div>
        </section>

        <Reveal as="section" className="flex flex-col gap-stack-lg">
          <div className="flex justify-between items-end border-b border-outline-variant/30 pb-4">
            <h2 className="text-headline-lg font-bold text-on-surface">Active Listings</h2>
          </div>

          <HoveredPropertyProvider>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {listings.map((property, index) => (
                <Reveal key={property.id} delay={index * 0.08}>
                  <PropertyCard property={property} />
                </Reveal>
              ))}
            </div>
          </HoveredPropertyProvider>
        </Reveal>

        <Reveal as="section" id="contact" className="max-w-xl mx-auto w-full scroll-mt-24">
          <ContactAgentForm agent={agent} title="Get in Touch" showAgentSummary={false} />
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
