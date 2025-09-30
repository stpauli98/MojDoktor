import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import StructuredData from "@/components/seo/StructuredData"
import { Suspense } from "react"
import { LocomotiveScrollProvider } from "@/components/ui/locomotive-scroll-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "system-ui",
    "sans-serif"
  ],
})

export const metadata: Metadata = {
  title: "DoktorOnline - Pronađi Doktora u BiH",
  description:
    "DoktorOnline je prva platforma u BiH gdje pacijenti mogu pronaći doktore, pročitati recenzije i zakazati termine online. Pretraga po gradu i specijalizaciji.",
  keywords: "doktor online, doktor onlajn, ljekar BiH, zakazivanje termina, medicinska platforma, zdravstvo BiH",

  metadataBase: new URL(process.env.NEXT_PUBLIC_PRODUCTION_URL || "https://doktoronline.ba"),
  alternates: {
    canonical: "/"
  },
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
    url: process.env.NEXT_PUBLIC_PRODUCTION_URL || "https://doktoronline.ba",
    type: "website",
    locale: "bs_BA",
    siteName: "DoktorOnline"
  },
  twitter: {
    card: "summary_large_image",
    title: "DoktorOnline - Pronađi Doktora u BiH",
    description: "Prva platforma u BiH za pronalaženje doktora i zakazivanje termina online"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bs">
      <head>
        {/* Critical CSS preload */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for faster third-party loads */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={`font-sans ${inter.variable} ${GeistMono.variable}`}>
        <StructuredData />
        <LocomotiveScrollProvider>
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen bg-background">
                <div className="animate-pulse medical-badge">Učitava se...</div>
              </div>
            }
          >
            {children}
          </Suspense>
        </LocomotiveScrollProvider>
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-NWDGQVF8N2" />
    </html>
  )
}
