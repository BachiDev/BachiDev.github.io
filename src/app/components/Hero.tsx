// components/Hero.tsx
import { profile } from "@/data/profile";
import { Button } from "./Button";
import { ParticlesBackground } from "./ParticlesBackground";
import { SocialLinks } from "./ui/SocialLinks";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] w-full flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:px-6">
      {/* Background elements */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ParticlesBackground />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 space-y-6">
        {profile.available ? (
          <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-brand-300 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.availabilityNote} — Vienna / Remote
          </p>
        ) : null}
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-zinc-400 md:text-xl">
          {profile.role} — {profile.tagline}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/work" size="lg">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
        <SocialLinks className="justify-center" />
      </div>
    </section>
  );
}
