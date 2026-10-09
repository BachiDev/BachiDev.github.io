import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Card } from "./ui/Card";
import { Pill } from "./ui/Pill";
import { Section } from "./ui/Section";

export function TechStack({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).tech;
  return (
    <Section id="tech-stack" eyebrow={dict.eyebrow} title={dict.title} lede={dict.lede}>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dict.groups.map((category) => (
          <Card key={category.title}>
            <h3 className="mb-4 text-xl font-bold">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Pill key={skill}>{skill}</Pill>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
