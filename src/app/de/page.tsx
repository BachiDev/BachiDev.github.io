import type { Metadata } from "next";
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  PersonJsonLd,
  Process,
  Services,
  TechStack,
  WorkTeaser,
} from "../components";
import { getDictionary } from "@/i18n/dictionaries";

const dict = getDictionary("de");

export const metadata: Metadata = {
  description: dict.site.description,
  keywords: dict.site.keywords,
  alternates: {
    canonical: "https://bachi.dev/de",
    languages: {
      en: "https://bachi.dev",
      de: "https://bachi.dev/de",
      "x-default": "https://bachi.dev",
    },
  },
  openGraph: {
    type: "website",
    url: "https://bachi.dev/de",
    siteName: "Fabian Bachmayer",
    title: "Fabian Bachmayer",
    description: dict.site.description,
    images: [
      {
        url: "/og-cover-de.png",
        width: 1200,
        height: 630,
        alt: dict.site.ogAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian Bachmayer",
    description: dict.site.description,
    images: ["/og-cover-de.png"],
  },
};

export default function DeLandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a href="#main" className="skip-link">
        {dict.skipLink}
      </a>
      <Header locale="de" switchHref="/" />
      <main id="main" className="flex-1">
        <Hero locale="de" />
        <Services locale="de" />
        <WorkTeaser locale="de" />
        <About locale="de" />
        <TechStack locale="de" />
        <Process locale="de" />
        <Contact locale="de" />
      </main>
      <Footer locale="de" />
      <PersonJsonLd locale="de" />
    </div>
  );
}
