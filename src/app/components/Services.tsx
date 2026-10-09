import { Code2, Database, Rocket, Smartphone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Card } from "./ui/Card";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

const icons = [Code2, Smartphone, Database, Rocket];

export function Services({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).services;
  const services = dict.items.map((item, i) => ({ ...item, icon: icons[i % icons.length] }));

  return (
    <Section id="services" tone="raised" eyebrow={dict.eyebrow} title={dict.title} lede={dict.lede}>
      <div className="mx-auto grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={(index % 2) * 80}>
            <Card>
              <div className="mb-4 text-brand-400">
                <service.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="mb-4 text-zinc-400">{service.description}</p>
              <ul className="mt-auto space-y-2 text-left text-sm text-zinc-300">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
