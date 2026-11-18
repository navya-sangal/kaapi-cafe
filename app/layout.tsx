import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are the biggest download on this page, so only what's needed is loaded:
// Fraunces (headings), Inter (body text), and Fraunces' real italic for the hero's "time.".
// next/font hosts them with the site, so there's no extra trip to Google.
const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
// The italic is only used for one word in the hero, so it's a trimmed copy of Fraunces
// SemiBold Italic (14 KB instead of 23 KB) with just English letters, numbers and punctuation.
// It isn't preloaded so it doesn't compete with the two main fonts on slow phones.
const displayItalic = localFont({
  src: "./fonts/fraunces-italic-600.woff2",
  style: "italic",
  weight: "600",
  variable: "--font-display-italic",
  adjustFontFallback: "Times New Roman",
  preload: false,
});

export const metadata: Metadata = {
  title: "Kaapi & Co. | Filter coffee café in Bandra West, Mumbai",
  description:
    "South Indian filter kaapi, small-batch bakes and all-day breakfast on Chapel Road, Bandra West. Reserve a table online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${displayItalic.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
