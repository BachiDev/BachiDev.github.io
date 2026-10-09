import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://bachi.dev";
const description =
  "Fabian Bachmayer — Full-Stack Developer in Vienna building modern web and mobile apps, from requirements to production.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fabian Bachmayer",
    template: "%s · Fabian Bachmayer",
  },
  description,
  authors: [{ name: "Fabian Bachmayer", url: siteUrl }],
  keywords: [
    "Fabian Bachmayer",
    "Full-Stack Developer",
    "Freelance Developer Vienna",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Fabian Bachmayer",
    title: "Fabian Bachmayer",
    description,
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Fabian Bachmayer — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian Bachmayer",
    description,
    images: ["/og-cover.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // NOTE: html lang stays "en" (only the root layout may render <html>).
    // German pages fix this at runtime via HtmlLang (src/app/de/) and are
    // fully annotated for crawlers via hreflang alternates in metadata.
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </body>
    </html>
  );
}
