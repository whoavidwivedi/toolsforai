import { Geist, Geist_Mono, DM_Sans, Google_Sans_Flex } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://toolsforai.whoavidwivedi.work"

const dmSans = DM_Sans({subsets:['latin'],variable:'--font-sans'})

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-flex",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "toolsforai",
    template: "%s | toolsforai",
  },
  description: "Coming soon.",
  applicationName: "toolsforai",
  authors: [{ name: "whoavidwivedi", url: "https://github.com/whoavidwivedi" }],
  creator: "whoavidwivedi",
  publisher: "whoavidwivedi",
  generator: "Next.js",
  keywords: ["toolsforai", "developer tools"],
  category: "developer tools",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "toolsforai",
    url: SITE_URL,
    title: "toolsforai",
    description: "Coming soon.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 3420,
        height: 2146,
        alt: "toolsforai",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "toolsforai",
    description: "Coming soon.",
    creator: "@whoavidwivedi",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, googleSansFlex.variable, "font-sans", dmSans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
