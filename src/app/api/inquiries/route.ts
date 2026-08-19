import { createInquiry } from "@/lib/inquiries";
import type { InquiryIntent } from "@/lib/types";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const agentId = typeof body.agentId === "string" ? body.agentId : "";

  if (!name || !email || !agentId) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const intent: InquiryIntent = body.intent === "question" ? "question" : "tour";
  const phone = typeof body.phone === "string" && body.phone.trim() ? body.phone.trim() : undefined;
  const message =
    typeof body.message === "string" && body.message.trim() ? body.message.trim() : undefined;
  const propertyId = typeof body.propertyId === "string" ? body.propertyId : undefined;
  const propertyAddress =
    typeof body.propertyAddress === "string" ? body.propertyAddress : undefined;

  await createInquiry({
    name,
    email,
    phone,
    message,
    intent,
    agentId,
    propertyId,
    propertyAddress,
  });

  return Response.json({ ok: true });
}
