import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

// ─── Env-driven Site Config ──────────────────────────────────────────────────
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!        // https://rakibulhasan.ami.bd
const siteName = process.env.NEXT_PUBLIC_SITE_NAME!
const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE!
const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION!
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "@rakibulhasan"
const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/rakibulhasan"
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://linkedin.com/in/rakibulhasan"
const twitterUrl = process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://twitter.com/rakibulhasan"

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Rakibul Hasan",
  },
  description: siteDescription,
  keywords: [
    "Full-Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Next.js Developer",
    "React Developer",
    "Web Development",
    "Portfolio",
    "Rakibul Hasan",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Rakibul Hasan", url: siteUrl }],
  creator: "Rakibul Hasan",
  publisher: "Rakibul Hasan",

  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteTitle,
    description: siteDescription,
    images: [{
      url: "/icon-192x192.png",  // 1200×630 in /public
      width: 1200,
      height: 630,
      alt: "Rakibul Hasan – Full-Stack Web Developer",
    }],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    site: twitterHandle,
    creator: twitterHandle,
    images: ["/icon-192x192.png"],
  },

  icons: {
    icon: [
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.webmanifest",
  applicationName: siteName,
  generator: "Next.js",
  category: "technology",
}

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD: Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rakibul Hasan",
              url: siteUrl,
              jobTitle: "Full-Stack Web Developer",
              description: siteDescription,
              sameAs: [githubUrl, linkedinUrl, twitterUrl],
              knowsAbout: [
                "JavaScript", "TypeScript", "Next.js", "React",
                "Node.js", "Full-Stack Development", "Web Performance",
              ],
            }),
          }}
        />

        {/* JSON-LD: WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
            }),
          }}
        />
      </head>

      <body className="font-sans antialiased">
        <Navigation />
        <main id="main-content">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}