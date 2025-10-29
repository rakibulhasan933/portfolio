import type { Metadata } from "next";
import { Anek_Devanagari, Ubuntu } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

// Optimize font loading with display: swap and preload
const inter = Ubuntu({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '700'],
});

export const viewport: Viewport = {
  themeColor: '#000000', // Use hex instead of color name
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rakibulhossain.com'),
  title: {
    default: "MD. Rakibul Hasan - Full Stack Developer Portfolio",
    template: "%s | MD. Rakibul Hasan Portfolio"
  },
  description: "Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with focus on accessibility and user-centered design.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "MD Rakibul Hasan"
  ],
  authors: [{ name: "MD. Rakibul Hasan" }],
  creator: "MD. Rakibul Hasan",
  publisher: "MD. Rakibul Hasan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rakibulhossain.com',
    title: "MD. Rakibul Hasan - Full Stack Developer Portfolio",
    description: "Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with focus on accessibility and user-centered design.",
    siteName: "MD. Rakibul Hasan Portfolio",
    images: [
      {
        url: "https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg",
        width: 1200,
        height: 630,
        alt: "MD. Rakibul Hasan - Full Stack Developer",
        type: "image/jpeg",
      },
      {
        url: "https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg",
        width: 800,
        height: 600,
        alt: "MD. Rakibul Hasan Profile Picture",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MD. Rakibul Hasan - Full Stack Developer Portfolio",
    description: "Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ['https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg'],
    creator: '@rakibul_hasan80',
  },
  // Add verification codes later via env or Search Console as needed
  alternates: {
    canonical: 'https://rakibulhossain.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Preload critical fonts for better performance */}

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Ubuntu+Mono:wght@400;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&family=Ubuntu+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'MD. Rakibul Hasan',
              url: 'https://rakibulhossain.com',
              image: 'https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg',
              sameAs: [
                'https://github.com/rakibulhasan933',
                'https://www.linkedin.com/in/rakibulhossainrakib',
                'https://twitter.com/rakibul_hasan80'
              ],
              jobTitle: 'Full Stack Developer'
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'MD. Rakibul Hasan Portfolio',
              url: 'https://rakibulhossain.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://rakibulhossain.com/?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            }),
          }}
        />

        {/* Additional performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-color-main antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}