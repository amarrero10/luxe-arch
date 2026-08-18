import { MongoClient } from "mongodb";
import { seedAgents, seedProperties } from "../src/lib/seed-data";

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  for (const property of seedProperties) {
    await db
      .collection("properties")
      .updateOne({ id: property.id }, { $set: property }, { upsert: true });
  }
  console.log(`Seeded ${seedProperties.length} properties.`);

  for (const agent of seedAgents) {
    await db.collection("agents").updateOne({ id: agent.id }, { $set: agent }, { upsert: true });
  }
  console.log(`Seeded ${seedAgents.length} agents.`);

  await db.collection("properties").createIndex({ id: 1 }, { unique: true });
  await db.collection("agents").createIndex({ id: 1 }, { unique: true });

  await client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
