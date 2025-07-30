import { ProjectCard } from "./ProjectCard";
import { Container } from "./Container";

export function Projects() {
  return (
    <Container id="projects" className="bg-neutral-900 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400">Projects</h2>
            <p className="max-w-[900px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m passionate about building open-source projects. Here are some of my favorites.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-2">
          <ProjectCard
            title="Project C"
            description="A library that makes it easy to build command-line interfaces."
            link="#"
            stars={1200}
          />
          <ProjectCard
            title="Project D"
            description="A framework for building serverless applications."
            link="#"
            stars={850}
          />
        </div>
    </Container>
  );
}