import { ImageResponse } from "next/og";
import { getPropertyById } from "@/lib/properties";
import { formatCityState, formatPrice } from "@/lib/format";

export const alt = "Property listing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000000",
            color: "#ffffff",
            fontSize: 48,
            fontWeight: 700,
          }}
        >
          Luxe Arch
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
        <img
          src={property.image}
          alt=""
          width={size.width}
          height={size.height}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: "linear-gradient(to top, rgba(0,0,0,0.88), rgba(0,0,0,0.05) 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            padding: "64px",
            color: "#ffffff",
          }}
        >
          <div style={{ display: "flex", fontSize: 60, fontWeight: 700 }}>
            {formatPrice(property.price)}
          </div>
          <div style={{ display: "flex", fontSize: 32, marginTop: 10, color: "#E5E7EB" }}>
            {property.address}, {formatCityState(property)}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
