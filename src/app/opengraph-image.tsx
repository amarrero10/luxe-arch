import { ImageResponse } from "next/og";

export const alt = "Luxe Arch";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#000000",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          LUXE ARCH
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#9CA3AF",
            marginTop: 28,
            maxWidth: 820,
          }}
        >
          Discover, tour, and inquire about architecturally distinctive properties.
        </div>
      </div>
    ),
    { ...size },
  );
}
