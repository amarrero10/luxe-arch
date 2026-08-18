import type { Property } from "./types";

export function formatCityState(property: Property): string {
  return `${property.city}, ${property.state}`;
}

export function formatPrice(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

export function formatPriceShort(price: number): string {
  const millions = price / 1_000_000;
  const rounded =
    millions >= 10 ? millions.toFixed(0) : millions.toFixed(2).replace(/0$/, "").replace(/\.$/, "");
  return `$${rounded}M`;
}
