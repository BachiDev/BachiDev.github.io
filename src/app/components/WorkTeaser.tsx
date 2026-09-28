import { featuredProjects } from "@/data/projects";
import { Button } from "./Button";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./ui/Section";

export function WorkTeaser() {
  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title="Proof, not promises"
      lede="A few projects that show how I work — from enterprise Java to machine-learning experiments."
    >
      <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button href="/work" variant="secondary" size="lg">
          See all work
        </Button>
      </div>
    </Section>
  );
}
