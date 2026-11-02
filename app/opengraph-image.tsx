import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem de preview ao compartilhar o link (LinkedIn, WhatsApp...). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#141414",
          color: "white",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a3a3a3" }}>
          <span>{site.location}</span>
          <span>{site.role}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -4 }}>{site.name}</div>
          <div style={{ fontSize: 34, color: "#a78bfa", marginTop: 16 }}>
            Qualidade de software & desenvolvimento full-stack
          </div>
        </div>
      </div>
    ),
    size,
  );
}
