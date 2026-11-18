import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Fonts are the biggest download on this page, so only what's needed is loaded:
// Fraunces (headings) without its separate italic file, and Inter (body text).
// next/font hosts them with the site, so there's no extra trip to Google.
const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Kaapi & Co. | Filter coffee café in Bandra West, Mumbai",
  description:
    "South Indian filter kaapi, small-batch bakes and all-day breakfast on Chapel Road, Bandra West. Reserve a table online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
