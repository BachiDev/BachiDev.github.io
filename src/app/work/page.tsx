import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PersonJsonLd } from "../components/JsonLd";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../components/Button";
import { Section } from "../components/ui/Section";
import { getProjects } from "@/data/projects";
import { anchorPath, homePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const dict = getDictionary("en");

export const metadata: Metadata = {
  title: dict.workPage.metaTitle,
  description: dict.workPage.metaDescription,
  alternates: {
    canonical: "https://bachi.dev/work",
    languages: {
      en: "https://bachi.dev/work",
      de: "https://bachi.dev/de/work",
      "x-default": "https://bachi.dev/work",
    },
  },
};

export default function WorkPage() {
  const t = dict.workPage;
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a href="#main" className="skip-link">
        {dict.skipLink}
      </a>
      <Header locale="en" switchHref="/de/work" />
      <main id="main" className="flex-1 pt-14">
        <Section eyebrow={t.eyebrow} title={t.title} lede={t.lede}>
          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getProjects("en").map((project) => (
              <ProjectCard key={project.slug} project={project} locale="en" />
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-xl space-y-4 text-center">
            <p className="text-lg text-zinc-400">{t.ctaText}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={anchorPath("en", "contact")} size="lg">
                {t.ctaPrimary}
              </Button>
              <Button href={homePath("en")} variant="secondary" size="lg">
                {t.ctaSecondary}
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale="en" />
      <PersonJsonLd locale="en" />
    </div>
  );
}
