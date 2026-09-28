import { Card } from "./ui/Card";
import { Pill } from "./ui/Pill";
import { Section } from "./ui/Section";

const frontend = {
  title: "Frontend",
  skills: [
    "React",
    "Next.js",
    "Angular",
    "Flutter",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Bootstrap",
  ],
};

const backend = {
  title: "Backend",
  skills: ["Node.js", "Java", "Spring Boot", "Hibernate", "Swagger", "Python"],
};

const databases = {
  title: "Databases",
  skills: ["PostgreSQL", "MySQL", "Firestore", "PL/SQL"],
};

const cloud = {
  title: "Cloud Services",
  skills: ["Google Cloud", "Firebase", "Supabase", "Vercel", "Render"],
};

const testing = {
  title: "Testing",
  skills: ["JUnit", "Mockito"],
};

const other = {
  title: "Other",
  skills: ["Git", "Docker", "CI/CD", "Agile", "Scrum", "BPMN", "Turbopack", "Gradle", "Maven"],
};

const tech = [frontend, backend, databases, cloud, testing, other];

export function TechStack() {
  return (
    <Section
      id="tech-stack"
      eyebrow="Tech Stack"
      title="My Tech Stack"
      lede="A selection of technologies I use to build modern web applications."
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tech.map((category) => (
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
