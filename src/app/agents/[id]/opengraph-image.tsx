import { ImageResponse } from "next/og";
import { getAgentById } from "@/lib/agents";

export const alt = "Agent profile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = await getAgentById(id);

  if (!agent) {
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
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <div
          style={{
            width: "46%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            background: "#000000",
            color: "#ffffff",
            padding: "56px",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: -1 }}>
            LUXE ARCH
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 54, fontWeight: 700, lineHeight: 1.1 }}>
              {agent.name}
            </div>
            <div style={{ display: "flex", fontSize: 26, color: "#9CA3AF", marginTop: 14 }}>
              {agent.title}
            </div>
          </div>
        </div>
        <div style={{ width: "54%", height: "100%", display: "flex", position: "relative" }}>
          <img
            src={agent.portrait}
            alt=""
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
