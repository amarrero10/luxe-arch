import { getAuth } from "@/lib/auth";
import { setInquiryStatus } from "@/lib/inquiries";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const status = body.status === "contacted" ? "contacted" : "new";

  const updated = await setInquiryStatus(id, status);
  if (!updated) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json({ ok: true });
}
