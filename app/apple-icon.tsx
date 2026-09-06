import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 35%, #8d2121 0%, #3b1313 100%)",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontSize: 118,
            fontWeight: 900,
            color: "#fff957",
            lineHeight: 1,
            fontFamily: "sans-serif",
          }}
        >
          T
        </span>
      </div>
    ),
    { ...size }
  )
}