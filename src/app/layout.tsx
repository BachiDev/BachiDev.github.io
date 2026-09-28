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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fabian Bachmayer",
  jobTitle: "Full-Stack Developer",
  url: siteUrl,
  email: "mailto:fabian@bachi.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vienna",
    addressCountry: "AT",
  },
  sameAs: ["https://github.com/BachiDev"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </body>
    </html>
  );
}
