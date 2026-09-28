import { Card } from "./ui/Card";
import { Section } from "./ui/Section";

const steps = [
  {
    n: "01",
    title: "Discover",
    text: "We scope goals, requirements, and success criteria in a short intro call — no 20-page spec needed up front.",
  },
  {
    n: "02",
    title: "Build",
    text: "Weekly increments you can click through early; priorities stay adjustable as we learn more.",
  },
  {
    n: "03",
    title: "Test & harden",
    text: "Automated tests plus accessibility and performance checks before anything ships.",
  },
  {
    n: "04",
    title: "Ship & support",
    text: "Deployed, monitored, and documented — with support after go-live.",
  },
];

export function Process() {
  return (
    <Section
      id="process"
      tone="raised"
      eyebrow="How I work"
      title="From idea to production"
      lede="A lightweight process that keeps surprises small and progress visible."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
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
