import "server-only";
import { getDb } from "./mongodb";
import type { Property } from "./types";

export type { FeatureCategory, Property } from "./types";

export type PropertyFilters = {
  q?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
  minBeds?: number;
  minBaths?: number;
};

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildQuery(filters?: PropertyFilters): Record<string, unknown> {
  if (!filters) return {};

  const query: Record<string, unknown> = {};

  if (filters.q?.trim()) {
    const regex = new RegExp(escapeRegex(filters.q.trim()), "i");
    query.$or = [{ address: regex }, { city: regex }, { state: regex }, { zip: regex }];
  }

  if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
    const priceQuery: Record<string, number> = {};
    if (filters.minPrice !== undefined) priceQuery.$gte = filters.minPrice;
    if (filters.maxPrice !== undefined) priceQuery.$lte = filters.maxPrice;
    query.price = priceQuery;
  }

  if (filters.propertyType) {
    query.propertyType = filters.propertyType;
  }

  if (filters.minBeds !== undefined) {
    query.beds = { $gte: filters.minBeds };
  }

  if (filters.minBaths !== undefined) {
    query.baths = { $gte: filters.minBaths };
  }

  return query;
}

export async function getProperties(filters?: PropertyFilters): Promise<Property[]> {
  const db = await getDb();
  return db
    .collection<Property>("properties")
    .find(buildQuery(filters), { projection: { _id: 0 } })
    .toArray();
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const db = await getDb();
  return db.collection<Property>("properties").findOne({ id }, { projection: { _id: 0 } });
}

function slugify(address: string): string {
  return address
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function createProperty(input: Omit<Property, "id">): Promise<Property> {
  const db = await getDb();
  const collection = db.collection<Property>("properties");

  const base = slugify(input.address) || "listing";
  let id = base;
  let suffix = 2;
  while (await collection.findOne({ id }, { projection: { _id: 1 } })) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }

  const property: Property = { ...input, id };
  await collection.insertOne(property);
  return property;
}

export async function updateProperty(
  id: string,
  input: Omit<Property, "id">,
): Promise<Property | null> {
  const db = await getDb();
  const result = await db
    .collection<Property>("properties")
    .findOneAndUpdate({ id }, { $set: input }, { returnDocument: "after", projection: { _id: 0 } });
  return result;
}

export async function deleteProperty(id: string): Promise<Property | null> {
  const db = await getDb();
  return db
    .collection<Property>("properties")
    .findOneAndDelete({ id }, { projection: { _id: 0 } });
}
