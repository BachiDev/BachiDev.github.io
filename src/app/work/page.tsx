import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../components/Button";
import { Section } from "../components/ui/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work · Fabian Bachmayer",
  description:
    "Selected projects by Fabian Bachmayer — full-stack web apps, machine learning, and frontend builds.",
};

export default function WorkPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main id="main" className="flex-1 pt-14">
        <Section
          eyebrow="Portfolio"
          title="Selected Work"
          lede="Every project below is live and open source — click through, try the demos, read the code."
        >
          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-xl space-y-4 text-center">
            <p className="text-lg text-zinc-400">
              Like what you see? Let&apos;s talk about your project.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/#contact" size="lg">
                Get in Touch
              </Button>
              <Button href="/" variant="secondary" size="lg">
                Back to Overview
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
