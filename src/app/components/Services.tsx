import { Bug, ClipboardList, Code2, Database, PenTool, Smartphone } from "lucide-react";
import { Card } from "./ui/Card";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building modern, responsive, and performant web applications with the latest technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Creating beautiful and user-friendly mobile apps for both iOS and Android platforms.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "I design intuitive and engaging user interfaces that provide a great user experience.",
  },
  {
    icon: ClipboardList,
    title: "Requirement Analyses",
    description:
      "I can help you define and document the requirements for your project to ensure a successful outcome.",
  },
  {
    icon: Bug,
    title: "Testing",
    description:
      "Thoroughly testing your application to ensure it's bug-free and production-ready.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "I can help you design, build, and maintain your database to ensure it is scalable and secure.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      tone="raised"
      eyebrow="Services"
      title="Services"
      lede="I offer a wide range of services to help you build your next digital product."
    >
      <div className="mx-auto grid max-w-5xl items-stretch gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={(index % 3) * 80}>
            <Card className="items-center text-center">
              <div className="mb-4 text-brand-400">
                <service.icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-zinc-400">{service.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
