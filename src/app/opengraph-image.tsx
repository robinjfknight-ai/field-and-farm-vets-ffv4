import { ImageResponse } from "next/og";
import { practice } from "@/lib/practice";

export const alt = `${practice.name} — farm & equine veterinary care`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #1b4f4d 0%, #0f2e2c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              background: "#cdb2e2",
            }}
          />
          <div
            style={{
              fontSize: "24px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            Farm &amp; Equine Vets · East Yorkshire
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "76px", fontWeight: 700, lineHeight: 1.05 }}>
            {practice.name}
          </div>
          <div style={{ marginTop: "20px", fontSize: "32px", opacity: 0.85, maxWidth: "900px" }}>
            {practice.tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "28px" }}>
          <div style={{ opacity: 0.7 }}>24hr emergency service · 365 days a year</div>
          <div style={{ opacity: 0.9, fontWeight: 600 }}>{practice.phone}</div>
        </div>
      </div>
    ),
    size,
  );
}
