
import { Container } from './Container';

const frontend = {
  title: 'Frontend',
  skills: ['React', 'Next.js', 'Angular', 'Flutter', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
};

const backend = {
  title: 'Backend',
  skills: ['Node.js','Java', 'Spring Boot','Hibernate', 'Swagger', 'Python'],
};

const databases = {
  title: 'Databases',
  skills: ['PostgreSQL', 'MySQL', 'Firestore'],
};

const cloud = {
  title: 'Cloud Services',
  skills: ['Google Cloud', 'Firebase', 'Supabase', 'Vercel', 'Render'],
};

const testing = {
  title: 'Testing',
  skills: ['JUnit', 'Mockito'],
};

const other = {
  title: 'Other',
  skills: ['Git', 'Docker', 'CI/CD', 'Agile', 'Scrum', 'BPMN','Turbopack', 'Gradle', 'Maven'],
};

const tech = [frontend, backend, databases, cloud, testing, other];

export function TechStack() {
  return (
    <section id="tech-stack" className="bg-neutral-900 mb-12">
      <Container>
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="section-heading">My Tech Stack</h2>
            <p className="max-w-[900px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">A selection of technologies I use to build modern web applications.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tech.map((category) => (
              <div key={category.title} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col h-full font-mono transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]">
                <h3 className="mb-4 text-xl font-bold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="rounded-md bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
