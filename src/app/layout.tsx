import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'
import Script from 'next/script'

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import dynamic from 'next/dynamic'

// Dynamic import for performance monitoring
const PerformanceMonitor = dynamic(() => import('./components/PerformanceMonitor'), {
  ssr: false,
  loading: () => null
});

// Optimize font loading with critical font display strategies
const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: 'swap', // Ensures text remains visible during font swap
  preload: true,
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10b981' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rakibulhasan-dev.vercel.app/'),
  title: {
    default: "MD. Rakibul Hasan - Full Stack Developer Portfolio",
    template: "%s | MD. Rakibul Hasan"
  },
  description: "Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with focus on accessibility and performance optimization.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Performance Optimization",
    "Web Performance",
    "Accessibility",
    "SEO Optimization",
    "Modern Web Technologies",
    "Portfolio",
    "MD Rakibul Hasan",
    "Rakibul Hasan"
  ],
  authors: [{ name: "MD. Rakibul Hasan", url: "https://rakibulhasan-dev.vercel.app" }],
  creator: "MD. Rakibul Hasan",
  publisher: "MD. Rakibul Hasan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rakibulhasan-dev.vercel.app',
    siteName: "MD. Rakibul Hasan Portfolio",
    title: "MD. Rakibul Hasan - Full Stack Developer Portfolio",
    description: "Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies. Creating exceptional digital experiences with focus on accessibility and performance optimization.",
    images: [
      {
        url: "https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg", // Using existing profile image
        width: 1200,
        height: 630,
        alt: "MD. Rakibul Hasan - Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rakibul_hasan80',
    creator: '@rakibul_hasan80',
    title: "MD. Rakibul Hasan - Full Stack Developer Portfolio",
    description: "Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ['https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg'], // Using existing profile image
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    other: {
      'msvalidate.01': 'your-bing-verification-code', // Replace with actual code
    }
  },
  alternates: {
    canonical: 'https://rakibulhasan-dev.vercel.app',
    languages: {
      'en-US': 'https://rakibulhasan-dev.vercel.app',
    },
  },
  category: 'technology',
  classification: 'Portfolio Website',
  referrer: 'origin-when-cross-origin',
  applicationName: 'Rakibul Hasan Portfolio',
  generator: 'Next.js',
  manifest: '/site.webmanifest',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Rakibul Portfolio',
    'application-name': 'Rakibul Portfolio',
    'msapplication-TileColor': '#10b981',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${ubuntu.className}`}>
      <head>
        {/* Critical Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//skillicons.dev" />
        <link rel="dns-prefetch" href="//i.ibb.co" />
        <link rel="dns-prefetch" href="//vercel.live" />


        {/* Critical Images Preload - Commented out until images are added */}
        {/* <link rel="preload" href="/profile-image.webp" as="image" type="image/webp" /> */}
        {/* <link rel="preload" href="/og-image.webp" as="image" type="image/webp" /> */}

        {/* Favicon and App Icons - Optimized */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#10b981" />

        {/* Service Worker Registration for Caching */}
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered: ', registration);
                  }).catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
                });
              }
            `,
          }}
        />

        {/* Critical CSS Inlining for Above-Fold Content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-fold content */
            .bg-slate-900 { background-color: rgb(15 23 42); }
            .text-white { color: rgb(255 255 255); }
            .text-emerald-400 { color: rgb(52 211 153); }
            .min-h-screen { min-height: 100vh; }
            .fixed { position: fixed; }
            .relative { position: relative; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .font-bold { font-weight: 700; }
            .text-5xl { font-size: 3rem; line-height: 1; }
            .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
            .text-2xl { font-size: 1.5rem; line-height: 2rem; }
            .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-6 { margin-bottom: 1.5rem; }
            .mb-10 { margin-bottom: 2.5rem; }
            .max-w-4xl { max-width: 56rem; }
            .max-w-2xl { max-width: 42rem; }
            .mx-auto { margin-left: auto; margin-right: auto; }
            .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .leading-relaxed { line-height: 1.625; }
            .text-slate-300 { color: rgb(203 213 225); }
            .text-slate-400 { color: rgb(148 163 184); }
            .border-2 { border-width: 2px; }
            .border-emerald-400 { border-color: rgb(52 211 153); }
            .rounded-lg { border-radius: 0.5rem; }
            .px-8 { padding-left: 2rem; padding-right: 2rem; }
            .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
            .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
            .duration-300 { transition-duration: 300ms; }
            .z-40 { z-index: 40; }
            .top-0 { top: 0; }
            .left-0 { left: 0; }
            .right-0 { right: 0; }
            .overflow-x-hidden { overflow-x: hidden; }
            @media (min-width: 768px) {
              .md\\:text-7xl { font-size: 4.5rem; line-height: 1; }
              .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
            }
          `
        }} />
      </head>
      <body className={`${ubuntu.className} bg-slate-900 antialiased scroll-smooth`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-400 text-slate-900 px-4 py-2 rounded-md z-50 font-medium"
        >
          Skip to main content
        </a>

        <div id="main-content">
          {children}
        </div>

        {/* Performance monitoring */}
        <PerformanceMonitor />

        {/* Analytics - Load after interaction */}
        <Analytics />
        <SpeedInsights />

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "MD. Rakibul Hasan",
              "jobTitle": "Full Stack Developer",
              "description": "Experienced full-stack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
              "url": "https://rakibulhasan-dev.vercel.app",
              "sameAs": [
                "https://linkedin.com/in/rakibulhossainrakib",
                "https://github.com/rakibulhasan933",
                "https://twitter.com/rakibul_hasan80"
              ],
              "image": "https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg",
              "email": "rakibulmd933@gmail.com",
              "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "PostgreSQL",
                "Docker",
                "AWS",
                "Web Development",
                "Full Stack Development"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
      </body>
    </html>
  );
}