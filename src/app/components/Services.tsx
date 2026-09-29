import { Code2, Database, Rocket, Smartphone } from "lucide-react";
import { Card } from "./ui/Card";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive, and performant web apps built with React, Next.js, and TypeScript.",
    points: [
      "Responsive, accessible interfaces",
      "SEO-friendly server rendering",
      "Deployed, monitored, documented",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "User-friendly mobile apps for iOS and Android from a single Flutter codebase.",
    points: ["One codebase, both platforms", "Native-feel UI", "Store release handling"],
  },
  {
    icon: Database,
    title: "API & Data",
    description: "REST APIs and databases designed to be scalable, secure, and easy to maintain.",
    points: [
      "Documented REST APIs",
      "PostgreSQL / Firestore data models",
      "Auth, Stripe payments, cloud deploys",
    ],
  },
  {
    icon: Rocket,
    title: "Quality & Delivery",
    description: "From requirements to production: scoped, tested, automated, and launched.",
    points: ["Requirements scoping", "Automated tests + CI/CD", "Launch & post-launch support"],
  },
];

export function Services() {
  return (
    <Section
      id="services"
      tone="raised"
      eyebrow="Services"
      title="What I can do for you"
      lede="Four focused offers — each one ends with something live, not a slide deck."
    >
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
