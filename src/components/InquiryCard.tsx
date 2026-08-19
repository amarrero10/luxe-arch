"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { formatRelativeTime } from "@/lib/format";
import type { Inquiry } from "@/lib/types";

export default function InquiryCard({ inquiry }: { inquiry: Inquiry }) {
  const router = useRouter();
  const [status, setStatus] = useState(inquiry.status);
  const [updating, setUpdating] = useState(false);
  const isContacted = status === "contacted";

  async function toggleStatus() {
    const nextStatus = isContacted ? "new" : "contacted";
    setUpdating(true);
    setStatus(nextStatus);

    const res = await fetch(`/api/inquiries/${inquiry.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });

    if (!res.ok) {
      setStatus(inquiry.status);
    } else {
      router.refresh();
    }
    setUpdating(false);
  }

  return (
    <div
      className={`bg-surface-container-lowest rounded-xl p-stack-md shadow-[0_10px_20px_rgba(0,0,0,0.04)] border border-outline-variant/30 flex flex-col md:flex-row gap-stack-md items-start md:items-center transition-opacity ${
        isContacted ? "opacity-70" : ""
      }`}
    >
      <div className="flex-1 flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-headline-md font-semibold text-primary text-lg leading-tight">
            {inquiry.name}
          </h3>
          <span className="px-3 py-1 rounded-full text-label-md font-semibold text-[12px] bg-secondary-container text-on-secondary-container">
            {inquiry.intent === "tour" ? "Tour Request" : "Question"}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-label-md font-semibold text-[12px] flex items-center gap-1 ${
              isContacted
                ? "bg-surface-variant text-on-surface-variant"
                : "bg-on-tertiary-container/10 text-on-tertiary-container"
            }`}
          >
            <span className="material-symbols-outlined text-[14px]">
              {isContacted ? "done_all" : "fiber_new"}
            </span>
            {isContacted ? "Contacted" : "New"}
          </span>
        </div>

        <p className="text-body-md text-on-surface-variant text-sm">
          {inquiry.email}
          {inquiry.phone ? ` • ${inquiry.phone}` : ""} • {formatRelativeTime(inquiry.createdAt)}
        </p>

        {inquiry.propertyAddress && (
          <p className="text-body-md text-on-surface-variant text-sm">
            Re:{" "}
            {inquiry.propertyId ? (
              <Link
                href={`/properties/${inquiry.propertyId}`}
                className="text-primary hover:underline underline-offset-4"
              >
                {inquiry.propertyAddress}
              </Link>
            ) : (
              inquiry.propertyAddress
            )}
          </p>
        )}

        {inquiry.message && (
          <p className="text-body-md text-on-surface mt-2 bg-surface-container-low p-2 rounded-md italic">
            &ldquo;{inquiry.message}&rdquo;
          </p>
        )}
      </div>

      <button
        onClick={toggleStatus}
        disabled={updating}
        className="w-full md:w-auto shrink-0 bg-surface-container-lowest border border-primary text-primary text-label-md font-semibold px-6 py-2 rounded-lg hover:bg-surface-container-low transition-colors disabled:opacity-60"
      >
        {isContacted ? "Mark as New" : "Mark as Contacted"}
      </button>
    </div>
  );
}
