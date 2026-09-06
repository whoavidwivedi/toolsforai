import { ImageResponse } from "next/og"

export const size = { width: 512, height: 512 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, #8d2121 0%, #3b1313 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ fontSize: 320, fontWeight: 900, color: "#fff957", lineHeight: 1 }}>
          T
        </span>
      </div>
    ),
    { ...size }
  )
}