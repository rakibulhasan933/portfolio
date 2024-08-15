import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import TanStackProvider from "@/components/TanStackProvider";
import type { Viewport } from 'next'


const inter = Anek_Devanagari({ subsets: ["latin"] });


export const viewport: Viewport = {
  themeColor: 'black',
}

export const metadata: Metadata = {
  title: "MD. Rakibul Hasan Portfolio",
  description: "I’m a full stack web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused  on building accessible, human-centered products.",
  openGraph: {
    images: [
      {
        url: "https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "rakibul hasan profile picture",
      },
      {
        url: "https://i.ibb.co/DVyr6LS/31671553-2062830170707480-6027634644545961984-n.jpg", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "rakibul hasan profile picture",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <TanStackProvider>{children}</TanStackProvider>
        <Toaster />
      </body>
    </html>
  );
}
