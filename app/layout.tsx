import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LocomotiveScrollProvider } from "@/components/ui/locomotive-scroll-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "DoktorOnline - Pronađi Doktora u BiH",
  description:
    "DoktorOnline je prva platforma u BiH gdje pacijenti mogu pronaći doktore, pročitati recenzije i zakazati termine online. Pretraga po gradu i specijalizaciji.",
  keywords: "doktor online, ljekar BiH, zakazivanje termina, medicinska platforma, zdravstvo BiH",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg'
  },
  openGraph: {
    title: "DoktorOnline - Pronađi Doktora u BiH",
    description: "Prva platforma u BiH za pronalaženje doktora i zakazivanje termina online",
    url: "https://doktoronline.ba",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bs">
      <body className={`font-sans ${inter.variable} ${GeistMono.variable}`}>
        <LocomotiveScrollProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </LocomotiveScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
