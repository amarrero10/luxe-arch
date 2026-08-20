import "server-only";
import { getDb } from "./mongodb";
import type { Agent } from "./types";

export type { Agent, AgentStat } from "./types";

export async function getAgents(): Promise<Agent[]> {
  const db = await getDb();
  return db.collection<Agent>("agents").find({}, { projection: { _id: 0 } }).toArray();
}

export async function getAgentById(id: string): Promise<Agent | null> {
  const db = await getDb();
  return db.collection<Agent>("agents").findOne({ id }, { projection: { _id: 0 } });
}

export async function getAgentByEmail(email: string): Promise<Agent | null> {
  const db = await getDb();
  return db.collection<Agent>("agents").findOne({ email }, { projection: { _id: 0 } });
}
