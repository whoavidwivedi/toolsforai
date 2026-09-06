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
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 35%, #8d2121 0%, #3b1313 100%)",
          }}
        >
          <span
            style={{
              fontSize: 320,
              fontWeight: 900,
              color: "#fff957",
              lineHeight: 1,
              fontFamily: "sans-serif",
            }}
          >
            T
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}