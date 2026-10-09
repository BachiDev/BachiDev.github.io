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
} from "./components";
import { getDictionary } from "@/i18n/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  alternates: {
    canonical: "https://bachi.dev",
    languages: {
      en: "https://bachi.dev",
      de: "https://bachi.dev/de",
      "x-default": "https://bachi.dev",
    },
  },
};

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a href="#main" className="skip-link">
        {dict.skipLink}
      </a>
      <Header locale="en" switchHref="/de" />
      <main id="main" className="flex-1">
        <Hero locale="en" />
        <Services locale="en" />
        <WorkTeaser locale="en" />
        <About locale="en" />
        <TechStack locale="en" />
        <Process locale="en" />
        <Contact locale="en" />
      </main>
      <Footer locale="en" />
      <PersonJsonLd locale="en" />
    </div>
  );
}
