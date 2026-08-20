"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Agent } from "@/lib/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+]?[\d\s()-]{7,20}$/;

type FieldErrors = Partial<Record<"name" | "email" | "phone", string>>;

function validate(values: { name: string; email: string; phone: string }): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  return errors;
}

const fieldClass = (hasError: boolean) =>
  `w-full bg-surface border rounded-lg px-4 py-3 text-body-md outline-none transition-colors ${
    hasError
      ? "border-error focus:border-error focus:ring-1 focus:ring-error"
      : "border-outline-variant focus:border-tertiary-container focus:ring-1 focus:ring-tertiary-container"
  }`;

export default function ContactAgentForm({
  agent,
  propertyId,
  propertyAddress,
  title = "Contact Agent",
  showAgentSummary = true,
}: {
  agent: Agent;
  propertyId?: string;
  propertyAddress?: string;
  title?: string;
  showAgentSummary?: boolean;
}) {
  const [sentAs, setSentAs] = useState<"tour" | "question" | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);
  const firstName = agent.name.split(" ")[0];

  function updateField(field: keyof typeof values, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (attempted) {
      setFieldErrors(validate(nextValues));
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setAttempted(true);
    const errors = validate(values);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const intent = submitter?.value === "question" ? "question" : "tour";

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim() || undefined,
          message: values.message.trim() || undefined,
          intent,
          agentId: agent.id,
          propertyId,
          propertyAddress,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setSentAs(intent);
    } catch {
      setError("Something went wrong sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
        <form className="flex flex-col gap-stack-sm mt-2" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={values.name}
              onChange={(e) => updateField("name", e.target.value)}
              aria-invalid={Boolean(fieldErrors.name)}
              className={fieldClass(Boolean(fieldErrors.name))}
            />
            {fieldErrors.name && (
              <p className="text-label-md text-error mt-1">{fieldErrors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={values.email}
              onChange={(e) => updateField("email", e.target.value)}
              aria-invalid={Boolean(fieldErrors.email)}
              className={fieldClass(Boolean(fieldErrors.email))}
            />
            {fieldErrors.email && (
              <p className="text-label-md text-error mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div>
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={values.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              aria-invalid={Boolean(fieldErrors.phone)}
              className={fieldClass(Boolean(fieldErrors.phone))}
            />
            {fieldErrors.phone && (
              <p className="text-label-md text-error mt-1">{fieldErrors.phone}</p>
            )}
          </div>

          <textarea
            name="message"
            placeholder={
              propertyAddress
                ? `I am interested in ${propertyAddress}...`
                : `I'd like to get in touch with ${firstName}...`
            }
            rows={3}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            className={`${fieldClass(false)} resize-none`}
          />

          {error && <p className="text-label-md font-semibold text-error">{error}</p>}

          <button
            type="submit"
            name="intent"
            value="tour"
            disabled={submitting}
            className="w-full bg-primary text-on-primary text-label-md font-semibold py-4 rounded-lg mt-2 hover:bg-primary/90 active:scale-[0.97] transition-all disabled:opacity-60"
          >
            {submitting ? "Sending..." : propertyAddress ? "Request Tour" : "Get in Touch"}
          </button>
          <button
            type="submit"
            name="intent"
            value="question"
            disabled={submitting}
            className="w-full bg-transparent border-2 border-primary text-primary text-label-md font-semibold py-3.5 rounded-lg hover:bg-surface-variant/50 active:scale-[0.97] transition-all disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Ask a Question"}
          </button>
        </form>
      )}
    </div>
  );
}
