import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

export function Process({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).process;
  return (
    <Section id="process" tone="raised" eyebrow={dict.eyebrow} title={dict.title} lede={dict.lede}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dict.steps.map((step) => (
          <Card key={step.n}>
            <p className="mb-3 font-mono text-sm font-bold text-brand-400">{step.n}</p>
            <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
            <p className="text-sm text-zinc-400">{step.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
