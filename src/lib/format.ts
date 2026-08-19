import type { Property } from "./types";

export function formatCityState(property: Property): string {
  return `${property.city}, ${property.state}`;
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

export function formatRelativeTime(isoDate: string): string {
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const diffMinutes = Math.round(diffMs / 60_000);

  if (diffMinutes < 1) return "just now";
  if (diffMinutes < 60) return `${diffMinutes} min${diffMinutes === 1 ? "" : "s"} ago`;

  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;

  const diffDays = Math.round(diffHours / 24);
  if (diffDays < 30) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;

  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatPriceShort(price: number): string {
  const millions = price / 1_000_000;
  const rounded =
    millions >= 10 ? millions.toFixed(0) : millions.toFixed(2).replace(/0$/, "").replace(/\.$/, "");
  return `$${rounded}M`;
}
