import type { Metadata } from "next";
import { Nunito, Space_Grotesk } from "next/font/google"; 
import "./globals.css";
import HotKeysHandler from "@/components/HotKeysHandler";

const nunito = Nunito({
  variable: "--font-nunito", 
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Shortly Pro — Shorten your URLs instantly",
  description: "Create, manage, and share short links with analytics — free and fast.",
  metadataBase: new URL("https://shortleepro.vercel.app"),
  keywords: ["URL shortener", "link shortener", "short links", "analytics", "custom domains"],
  authors: [{ name: "Priyanshu", url: "https://shortleepro.vercel.app" }],

  openGraph: {
    title: "Shortly Pro — Shorten your URLs instantly",
    description: "Create, manage, and share short links with analytics — free and fast.",
    url: "https://shortleepro.vercel.app",
    siteName: "Shortly Pro",
    images: [
      {
        url: "/bg.webp",
        width: 1200,
        height: 630,
        alt: "Shortly Pro Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shortly Pro — Shorten your URLs instantly",
    description: "Create, manage, and share short links with analytics — free and fast.",
    creator: "@yansh_08",
    images: ["/bg.webp"],
  },

  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${space.variable} antialiased`}>
        <HotKeysHandler />
        {children}
      </body>
    </html>
  );
}
