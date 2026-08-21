import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getAgents } from "@/lib/agents";

export const metadata: Metadata = {
  title: "Our Agents - Luxe Arch",
  description: "Meet the Luxe Arch team of luxury real estate brokers.",
};

export default async function AgentsDirectoryPage() {
  const agents = await getAgents();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="Agents" />
      </div>

      <main className="grow w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-12 md:py-20 flex flex-col gap-section-gap">
        <Reveal className="max-w-2xl">
          <h1 className="text-display-lg font-bold text-primary tracking-tight">Our Agents</h1>
          <p className="text-body-lg text-on-surface-variant mt-3">
            A small, dedicated roster of brokers who know their markets in depth, not just in
            passing.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {agents.map((agent, index) => (
            <Reveal key={agent.id} delay={index * 0.08}>
              <Link
                href={`/agents/${agent.id}`}
                className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden border border-transparent hover:border-surface-variant property-card-shadow transition-all h-full"
              >
                <div className="aspect-4/3 w-full relative overflow-hidden">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-stack-md flex flex-col gap-1">
                  <div className="text-primary text-lg font-semibold group-hover:underline underline-offset-4">
                    {agent.name}
                  </div>
                  <div className="text-on-surface-variant text-sm">{agent.title}</div>
                  <div className="text-secondary mt-1 flex items-center gap-1 text-label-md font-semibold">
                    <span className="material-symbols-outlined icon-fill text-sm">star</span>
                    {agent.rating.toFixed(1)} ({agent.reviews} reviews)
                  </div>
                  {agent.bio[0] && (
                    <p className="text-body-md text-on-surface-variant mt-2 line-clamp-2">
                      {agent.bio[0]}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
