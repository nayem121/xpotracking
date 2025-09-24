import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Xpo Tracking: Logistic Tracker App | Track Your Parcels Anytime, Anywhere",
  description:
    "Stay updated on your logistics parcels with our fast, reliable Xpo tracking app. Track documents, packages, and business shipments directly on your phone. Third-party logistics tracking application.",
  keywords:
    "Xpo tracking, logistics tracking, parcel tracking, package tracking, delivery tracking, third party app, courier tracking, shipment tracking, logistics app, parcel tracker",
  authors: [{ name: "Youth Empowerment Center" }],
  creator: "Youth Empowerment Center",
  publisher: "Youth Empowerment Center",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Xpo Tracking: Logistic Tracker App | Track Your Parcels Anytime, Anywhere",
    description:
      "Stay updated on your logistics parcels with our fast, reliable Xpo tracking app. Track documents, packages, and business shipments directly on your phone.",
    url: "https://xpotracking.yec.org.bd",
    siteName: "Xpo Tracking: Logistic Tracker",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xpo Tracking: Logistic Tracker App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpo Tracking: Logistic Tracker App | Track Your Parcels Anytime, Anywhere",
    description: "Stay updated on your logistics parcels with our fast, reliable Xpo tracking app.",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
