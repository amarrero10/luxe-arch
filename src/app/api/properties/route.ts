import { headers } from "next/headers";
import { getAuth } from "@/lib/auth";
import { createProperty } from "@/lib/properties";
import { geocodeAddress } from "@/lib/geocode";
import type { FeatureCategory } from "@/lib/types";

function toNumber(value: unknown): number | null {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function toParagraphs(text: unknown): string[] {
  if (typeof text !== "string") return [];
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function toFeatures(value: unknown): FeatureCategory[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((entry): FeatureCategory | null => {
      if (typeof entry !== "object" || entry === null) return null;
      const category = entry as Record<string, unknown>;
      const icon = typeof category.icon === "string" ? category.icon.trim() : "";
      const label = typeof category.label === "string" ? category.label.trim() : "";
      const items = Array.isArray(category.items)
        ? category.items.filter((item): item is string => typeof item === "string" && item.trim() !== "")
        : [];
      if (!icon || !label || items.length === 0) return null;
      return { icon, label, items };
    })
    .filter((category): category is FeatureCategory => category !== null);
}

export async function POST(request: Request) {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const b = body as Record<string, unknown>;
  const address = typeof b.address === "string" ? b.address.trim() : "";
  const city = typeof b.city === "string" ? b.city.trim() : "";
  const state = typeof b.state === "string" ? b.state.trim() : "";
  const zip = typeof b.zip === "string" ? b.zip.trim() : "";
  const status = typeof b.status === "string" ? b.status.trim() : "For Sale";
  const badge = typeof b.badge === "string" && b.badge.trim() ? b.badge.trim() : undefined;
  const agentId = typeof b.agentId === "string" ? b.agentId.trim() : "";

  const price = toNumber(b.price);
  const beds = toNumber(b.beds);
  const baths = toNumber(b.baths);
  const sqft = toNumber(b.sqft);
  const yearBuilt = toNumber(b.yearBuilt);

  const gallery = Array.isArray(b.gallery)
    ? b.gallery.filter((url): url is string => typeof url === "string" && url.trim() !== "")
    : [];

  if (
    !address ||
    !city ||
    !state ||
    !zip ||
    !agentId ||
    price === null ||
    beds === null ||
    baths === null ||
    sqft === null ||
    yearBuilt === null ||
    gallery.length === 0
  ) {
    return Response.json({ error: "Missing or invalid required fields" }, { status: 400 });
  }

  const coordinates = await geocodeAddress(`${address}, ${city}, ${state} ${zip}`);
  if (!coordinates) {
    return Response.json(
      { error: "Couldn't locate that address on the map. Please double-check it and try again." },
      { status: 422 },
    );
  }

  const property = await createProperty({
    address,
    city,
    state,
    zip,
    status,
    badge,
    agentId,
    price,
    beds,
    baths,
    sqft,
    yearBuilt,
    image: gallery[0],
    gallery,
    lat: coordinates.lat,
    lng: coordinates.lng,
    description: toParagraphs(b.description),
    features: toFeatures(b.features),
  });

  return Response.json({ id: property.id });
}
