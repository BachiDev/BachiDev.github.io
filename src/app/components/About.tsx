import Image from "next/image";
import { Button } from "./Button";
import { Section } from "./ui/Section";

export function About() {
  return (
    <Section id="about" tone="raised" eyebrow="About" title="About Me" align="left">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <p className="max-w-[600px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            With a solid background in Telecommunications and AI Training, I bring several years of
            experience in the software industry. I am adept at contributing to all phases of the
            software development lifecycle, from initial concept and design to deployment and
            maintenance. My goal is to leverage my expertise to create robust, efficient, and
            scalable software solutions.
          </p>
          <div className="mt-4">
            <Button href="./Fabian_Bachmayer_CV.pdf" download variant="secondary">
              Download CV
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="Fabian Bachmayer"
            className="mx-auto overflow-hidden rounded-xl object-contain sm:w-full md:max-w-md"
            height="800"
            src="/CV-Pic.webp"
            width="800"
            sizes="(max-width: 768px) 100vw, 550px"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1/10 bg-gradient-to-t from-zinc-950 to-transparent"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </Section>
  );
}
