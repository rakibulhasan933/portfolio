import React from "react"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Rakibul Hasan | Full-Stack Web Developer',
  description: 'Full-stack web developer specializing in JavaScript, TypeScript, and Next.js. Building modern, scalable web applications with clean code and exceptional user experiences.',
  keywords: ['Full-Stack Developer', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Rakibul Hasan' }],
  openGraph: {
    title: 'Rakibul Hasan | Full-Stack Web Developer',
    description: 'Full-stack web developer specializing in JavaScript, TypeScript, and Next.js.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"
      className="hydrated"
    >
      <body className={`font-sans antialiased`}

      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
