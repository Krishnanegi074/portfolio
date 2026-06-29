import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Krishna Negi — Senior Product Designer",
  description:
    "Senior Product Designer with 8+ years of experience across SaaS, fintech, AI-driven products, and enterprise platforms. Open to Senior and Staff Designer roles.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "Design Systems",
    "Krishna Negi",
    "Senior Product Designer",
  ],
  authors: [{ name: "Krishna Negi" }],
  openGraph: {
    title: "Krishna Negi — Senior Product Designer",
    description:
      "8 years designing products that scale with precision — SaaS, fintech, AI, and enterprise platforms.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0e0e0e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body>{children}</body>
    </html>
  )
}
