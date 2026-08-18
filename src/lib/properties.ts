import "server-only";
import { getDb } from "./mongodb";
import type { Property } from "./types";

export type { FeatureCategory, Property } from "./types";

export async function getProperties(): Promise<Property[]> {
  const db = await getDb();
  return db.collection<Property>("properties").find({}, { projection: { _id: 0 } }).toArray();
}

export async function getPropertyById(id: string): Promise<Property | null> {
  const db = await getDb();
  return db.collection<Property>("properties").findOne({ id }, { projection: { _id: 0 } });
}
