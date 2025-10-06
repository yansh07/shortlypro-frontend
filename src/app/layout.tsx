import type { Metadata } from "next";
import { Nunito, Space_Grotesk } from "next/font/google"; 
import "./globals.css";

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
  title: "Shortly Pro",
  description: "Shorten your url",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${space.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
