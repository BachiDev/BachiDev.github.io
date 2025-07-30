import Image from "next/image";
import { Container } from "./Container";

export function About() {
  return (
    <Container id="about" className="flex flex-col items-center justify-center">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400">About Me</h2>
              <p className="max-w-[600px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;m a passionate full-stack developer with a love for creating beautiful and functional web and mobile applications. I have a strong background in both front-end and back-end technologies, and I&apos;m always eager to learn new things.
              </p>
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold">My Skills</h3>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">React</span>
                    <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                    <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                    <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">GraphQL</span>
                    <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                </div>
            </div>
          </div>
          <div className="relative">
            <Image
              alt="Fabian Bachmayer"
              className="mx-auto overflow-hidden rounded-xl object-contain sm:w-full md:max-w-md"
              height="550"
              src="/CV-Pic-Transparent.png"
              width="550"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/10 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
          </div>
        </div>
    </Container>
  );
}