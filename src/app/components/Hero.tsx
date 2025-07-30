// components/Hero.tsx
import { Button } from "./Button";
import { ParticlesBackground } from "./ParticlesBackground";

export function Hero() {
  return (
    <section
      className="w-full h-[100vh] flex flex-col items-center justify-center text-center px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      {/* This div should correctly size and position the particles' container */}
      <div className="absolute inset-0 z-0"> 
        <ParticlesBackground />
      </div>
      
      {/* Foreground content */}
      <div className="space-y-4 animate-fade-in-up relative z-10">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Fabian Bachmayer
        </h1>
        <p className="mx-auto max-w-[700px] text-neutral-400 md:text-xl">
          Full-Stack Freelance Developer
        </p>
        <Button href="https://bachidev.github.io/my-portfolio/">
          View My Portfolio
        </Button>
      </div>
    </section>
  );
}