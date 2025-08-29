import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'

// Optimize font loading with display: swap and preload
const inter = Anek_Devanagari({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-anek'
});

export const viewport: Viewport = {
  themeColor: '#000000', // Use hex instead of color name
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rakibulhasan-dev.vercel.app/'), // Replace with your actual domain
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
    url: 'https://your-domain.com', // Replace with your actual domain
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
    creator: '@your_twitter_handle', // Replace with your actual Twitter handle
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://your-domain.com', // Replace with your actual domain
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-color-main antialiased`}>
        {children}
      </body>
    </html>
  );
}