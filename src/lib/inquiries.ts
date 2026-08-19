import "server-only";
import { ObjectId, type WithId, type Document } from "mongodb";
import { getDb } from "./mongodb";
import type { Inquiry, NewInquiry, InquiryStatus } from "./types";

function toInquiry(doc: WithId<Document>): Inquiry {
  return {
    id: doc._id.toString(),
    name: doc.name,
    email: doc.email,
    phone: doc.phone,
    message: doc.message,
    intent: doc.intent,
    propertyId: doc.propertyId,
    propertyAddress: doc.propertyAddress,
    agentId: doc.agentId,
    status: doc.status,
    createdAt: doc.createdAt instanceof Date ? doc.createdAt.toISOString() : doc.createdAt,
  };
}

export async function getInquiries(): Promise<Inquiry[]> {
  const db = await getDb();
  const docs = await db.collection("inquiries").find({}).sort({ createdAt: -1 }).toArray();
  return docs.map(toInquiry);
}

export async function createInquiry(input: NewInquiry): Promise<void> {
  const db = await getDb();
  await db.collection("inquiries").insertOne({
    ...input,
    status: "new" satisfies InquiryStatus,
    createdAt: new Date(),
  });
}

export async function setInquiryStatus(id: string, status: InquiryStatus): Promise<boolean> {
  const db = await getDb();
  const result = await db
    .collection("inquiries")
    .updateOne({ _id: new ObjectId(id) }, { $set: { status } });
  return result.matchedCount > 0;
}
