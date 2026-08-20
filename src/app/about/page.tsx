import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { getProperties } from "@/lib/properties";
import { getAgents } from "@/lib/agents";

export const metadata: Metadata = {
  title: "About - Luxe Arch",
  description:
    "Luxe Arch represents a small number of architecturally significant homes across the country, and the people who live in them.",
};

const values = [
  {
    icon: "architecture",
    title: "Architectural Eye",
    description:
      "We only take on homes with real design pedigree — landmark construction, notable architects, or a point of view you won't find in a standard listing.",
  },
  {
    icon: "lock",
    title: "Absolute Discretion",
    description:
      "Off-market previews, private tours, and quiet negotiations for clients who value privacy as much as the property itself.",
  },
  {
    icon: "public",
    title: "Multi-City Expertise",
    description:
      "Licensed and active across every market we list in, with agents who know each city's architecture and pace, not just its price sheet.",
  },
];

export default async function AboutPage() {
  const [properties, agents] = await Promise.all([getProperties(), getAgents()]);

  const states = Array.from(new Set(properties.map((property) => property.state))).sort();
  const heroProperty = properties.find((property) => property.badge) ?? properties[0];

  const stats = [
    { label: "Active Listings", value: String(properties.length) },
    { label: "States Served", value: states.join(" · ") || "—" },
    { label: "Years Combined Exp.", value: "12+" },
    { label: "Sales Volume", value: "$1.4B+" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-50">
        <Header active="About" />
      </div>

      <main className="grow flex flex-col">
        <section className="relative h-105 md:h-140 w-full overflow-hidden">
          {heroProperty && (
            <Image
              src={heroProperty.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop pb-12 md:pb-16">
              <h1 className="text-display-lg font-bold text-on-primary max-w-2xl">
                Real estate, considered like architecture.
              </h1>
              <p className="text-body-lg text-on-primary/90 max-w-xl mt-4">
                Luxe Arch represents a small number of architecturally significant homes across the
                country, and the people who live in them.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full max-w-container-container-max mx-auto px-6 md:px-margin-desktop py-section-gap flex flex-col gap-section-gap">
          <Reveal as="section" className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline-lg font-bold text-primary mb-stack-md">Our Approach</h2>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Luxe Arch was built around a simple idea: the best properties deserve the same care in
              how they&rsquo;re presented and sold as they received in how they were designed. We
              work with a select roster of estates — hillside villas, landmark condos,
              architect-built homes — where the building itself is part of the story.
            </p>
            <p className="text-body-lg text-on-surface-variant leading-relaxed mt-4">
              That means fewer listings, more attention to each one, and agents who know the
              architectural and market context of every city we operate in.
            </p>
          </Reveal>

          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
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
            </div>
          </section>

          <Reveal as="section">
            <h2 className="text-headline-lg font-bold text-primary mb-stack-md">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
              {values.map((value, index) => (
                <Reveal
                  key={value.title}
                  delay={index * 0.1}
                  className="bg-surface-container-low rounded-xl p-stack-md border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    {value.icon}
                  </span>
                  <h3 className="text-headline-md font-semibold text-primary mt-stack-sm mb-2">
                    {value.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {value.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal as="section">
            <h2 className="text-headline-lg font-bold text-primary mb-stack-md">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
              {agents.map((agent, index) => (
                <Reveal key={agent.id} delay={index * 0.08}>
                  <Link
                    href={`/agents/${agent.id}`}
                    className="group flex items-center gap-stack-md bg-surface-container-lowest rounded-xl p-stack-md border border-transparent hover:border-surface-variant property-card-shadow transition-all"
                  >
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 relative">
                      <Image
                        src={agent.photo}
                        alt={agent.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-primary text-lg font-semibold group-hover:underline underline-offset-4">
                        {agent.name}
                      </div>
                      <div className="text-on-surface-variant text-sm">{agent.title}</div>
                      <div className="text-secondary mt-1 flex items-center gap-1 text-label-md font-semibold">
                        <span className="material-symbols-outlined icon-fill text-sm">star</span>
                        {agent.rating.toFixed(1)} ({agent.reviews} reviews)
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal as="section" className="text-center bg-surface-container-low rounded-xl py-16 px-6">
            <h2 className="text-headline-lg font-bold text-primary mb-2">
              Ready to see what&rsquo;s available?
            </h2>
            <p className="text-body-md text-on-surface-variant mb-stack-md">
              Browse our current roster of architecturally distinctive homes.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary text-on-primary text-label-md font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 active:scale-[0.97] transition-all"
            >
              Browse Listings
            </Link>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
