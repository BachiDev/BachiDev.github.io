import { getFeaturedProjects } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { workPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Button } from "./Button";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./ui/Section";

export function WorkTeaser({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).workTeaser;
  return (
    <Section id="work" eyebrow={dict.eyebrow} title={dict.title} lede={dict.lede}>
      <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {getFeaturedProjects(locale).map((project) => (
          <ProjectCard key={project.slug} project={project} locale={locale} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href={workPath(locale)} variant="secondary" size="lg">
          {dict.cta}
        </Button>
      </div>
    </Section>
  );
}
