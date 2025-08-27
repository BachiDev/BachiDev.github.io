import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";

export function About() {
  return (
    <Container id="about" className="flex flex-col items-center justify-center">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400">About Me</h2>
              <p className="max-w-[600px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With a solid background in Telecommunications and AI Training, I bring several years of experience in the software industry. I am adept at contributing to all phases of the software development lifecycle, from initial concept and design to deployment and maintenance. My goal is to leverage my expertise to create robust, efficient, and scalable software solutions.
              </p>
            </div>
            <a href="./Fabian_Bachmayer_CV.pdf" download className="mt-4">
              <Button>Download CV</Button>
            </a>
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