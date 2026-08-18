"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Agent } from "@/lib/agents";

export default function ContactAgentForm({
  agent,
  propertyAddress,
  title = "Contact Agent",
  showAgentSummary = true,
}: {
  agent: Agent;
  propertyAddress?: string;
  title?: string;
  showAgentSummary?: boolean;
}) {
  const [sentAs, setSentAs] = useState<"tour" | "question" | null>(null);
  const firstName = agent.name.split(" ")[0];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const intent = submitter?.value === "question" ? "question" : "tour";
    setSentAs(intent);
  }

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.04)] border border-outline-variant/20 p-gutter flex flex-col gap-stack-md">
      <h3 className="text-headline-md font-semibold text-primary">{title}</h3>

      {showAgentSummary && (
        <div className="flex items-center gap-stack-md pb-stack-md border-b border-outline-variant/30">
          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 relative">
            <Image src={agent.photo} alt={agent.name} fill sizes="64px" className="object-cover" />
          </div>
          <div>
            <Link
              href={`/agents/${agent.id}`}
              className="text-primary text-lg font-semibold hover:underline underline-offset-4"
            >
              {agent.name}
            </Link>
            <div className="text-on-surface-variant text-sm">{agent.title}</div>
            <div className="text-secondary mt-1 flex items-center gap-1 text-label-md font-semibold">
              <span className="material-symbols-outlined icon-fill text-sm">star</span>
              {agent.rating.toFixed(1)} ({agent.reviews} reviews)
            </div>
          </div>
        </div>
      )}

      {sentAs ? (
        <div className="py-stack-md text-center">
          <div className="text-headline-md font-semibold text-primary mb-2">Message sent</div>
          <p className="text-body-md text-on-surface-variant">
            {firstName} will follow up about{" "}
            {propertyAddress
              ? `${sentAs === "tour" ? "scheduling a tour of" : "your question on"} ${propertyAddress}`
              : "your inquiry"}{" "}
            within 24 hours.
          </p>
        </div>
      ) : (
        <form className="flex flex-col gap-stack-sm mt-2" onSubmit={handleSubmit}>
          <input
            required
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
          />
          <input
            required
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors"
          />
          <textarea
            name="message"
            placeholder={
              propertyAddress
                ? `I am interested in ${propertyAddress}...`
                : `I'd like to get in touch with ${firstName}...`
            }
            rows={3}
            className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:outline-none focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container transition-colors resize-none"
          />
          <button
            type="submit"
            name="intent"
            value="tour"
            className="w-full bg-primary text-on-primary text-label-md font-semibold py-4 rounded-lg mt-2 hover:bg-primary/90 transition-colors"
          >
            {propertyAddress ? "Request Tour" : "Get in Touch"}
          </button>
          <button
            type="submit"
            name="intent"
            value="question"
            className="w-full bg-transparent border-2 border-primary text-primary text-label-md font-semibold py-3.5 rounded-lg hover:bg-surface-variant/50 transition-colors"
          >
            Ask a Question
          </button>
        </form>
      )}
    </div>
  );
}
