"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { formatCityState, formatPrice } from "@/lib/format";
import type { Property } from "@/lib/types";

export default function DashboardListingCard({ property }: { property: Property }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    setDeleting(true);
    setError(null);
    try {
      const res = await fetch(`/api/properties/${property.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete listing.");
      router.refresh();
    } catch {
      setError("Couldn't delete this listing. Please try again.");
      setDeleting(false);
      setConfirming(false);
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-stack-sm bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30">
      <div className="relative w-full sm:w-24 h-32 sm:h-20 rounded-lg overflow-hidden shrink-0">
        <Image
          src={property.image}
          alt={property.address}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-primary font-semibold truncate">{property.address}</span>
          <span className="text-label-md font-semibold px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] shrink-0">
            {property.status}
          </span>
        </div>
        <p className="text-body-md text-on-surface-variant text-sm truncate">
          {formatCityState(property)} • {formatPrice(property.price)}
        </p>
        {error && <p className="text-label-md text-error mt-1">{error}</p>}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link
          href={`/properties/${property.id}`}
          className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
          aria-label="View listing"
        >
          <span className="material-symbols-outlined">open_in_new</span>
        </Link>
        <Link
          href={`/dashboard/listings/${property.id}/edit`}
          className="px-3 py-2 rounded-lg border border-outline-variant text-label-md font-semibold text-on-surface hover:bg-surface-container-low transition-colors"
        >
          Edit
        </Link>
        {confirming ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className="px-3 py-2 rounded-lg bg-error text-on-error text-label-md font-semibold disabled:opacity-60"
            >
              {deleting ? "Deleting..." : "Confirm"}
            </button>
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirming(true)}
            aria-label="Delete listing"
            className="p-2 rounded-lg text-on-surface-variant hover:text-error hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        )}
      </div>
    </div>
  );
}
