import { headers } from "next/headers";
import { getAuth } from "@/lib/auth";
import { createProperty } from "@/lib/properties";
import { parsePropertyInput } from "@/lib/property-input";

export async function POST(request: Request) {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = await parsePropertyInput(body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: parsed.status });
  }

  const property = await createProperty(parsed.data);
  return Response.json({ id: property.id });
}
