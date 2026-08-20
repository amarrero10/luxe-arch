import { headers } from "next/headers";
import { del } from "@vercel/blob";
import { getAuth } from "@/lib/auth";
import { deleteProperty, getPropertyById, updateProperty } from "@/lib/properties";
import { parsePropertyInput } from "@/lib/property-input";

function isBlobUrl(url: string): boolean {
  try {
    return new URL(url).hostname.endsWith(".public.blob.vercel-storage.com");
  } catch {
    return false;
  }
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const existing = await getPropertyById(id);
  if (!existing) {
    return Response.json({ error: "Listing not found" }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  const parsed = await parsePropertyInput(body);
  if (!parsed.ok) {
    return Response.json({ error: parsed.error }, { status: parsed.status });
  }

  const removedImages = existing.gallery.filter(
    (url) => !parsed.data.gallery.includes(url) && isBlobUrl(url),
  );
  if (removedImages.length > 0) {
    await del(removedImages).catch(() => undefined);
  }

  const updated = await updateProperty(id, parsed.data);
  if (!updated) {
    return Response.json({ error: "Listing not found" }, { status: 404 });
  }

  return Response.json({ id: updated.id });
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await getAuth();
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const property = await deleteProperty(id);
  if (!property) {
    return Response.json({ error: "Listing not found" }, { status: 404 });
  }

  const blobUrls = property.gallery.filter(isBlobUrl);
  if (blobUrls.length > 0) {
    await del(blobUrls).catch(() => undefined);
  }

  return Response.json({ ok: true });
}
