"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Expand, ExternalLink, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "./Button";
import { Card } from "./ui/Card";

export function ProjectCard({ project }: { project: Project }) {
  const [enlarged, setEnlarged] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Card-size thumbnail; the full-size image is reserved for the lightbox.
  const thumbnail = project.image.replace(/\.webp$/, "-sm.webp");

  const close = useCallback(() => setEnlarged(false), []);

  useEffect(() => {
    if (!enlarged) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [enlarged, close]);

  return (
    <>
      <Card className="text-center">
        <p className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
          {project.type}
        </p>
        <h3 className="mb-4 text-xl font-bold">{project.name}</h3>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setEnlarged(true)}
          aria-label={`Enlarge screenshot of ${project.name}`}
          className="group relative mb-4 block h-48 w-full cursor-zoom-in overflow-hidden rounded-md"
        >
          <Image
            src={thumbnail}
            alt={`Screenshot of ${project.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain transition-opacity duration-300 group-hover:opacity-75"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <Expand className="h-12 w-12 text-white drop-shadow-lg" />
          </span>
        </button>
        <p className="mb-2 flex items-start gap-2 text-left text-sm text-zinc-300">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
          {project.outcome}
        </p>
        <p className="mb-4 flex-grow text-left text-sm text-zinc-400">{project.description}</p>
        <div className="mb-4 flex flex-wrap justify-center gap-2 rounded-xl bg-white/[0.03] px-4 py-3 ring-1 ring-white/5">
          {project.stack.map((tech) => (
            <span
              key={tech.name}
              tabIndex={0}
              role="img"
              aria-label={tech.name}
              title={tech.name}
              className="group/icon relative flex h-9 w-9 items-center justify-center rounded-md bg-white p-1.5"
            >
              <Image
                src={tech.icon}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
                aria-hidden="true"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-full mb-2 hidden whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1 text-xs text-white shadow-lg group-hover/icon:block group-focus/icon:block"
              >
                {tech.name}
              </span>
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <Button href={project.githubUrl} variant="secondary" className="w-full">
            <Image
              src="/github.svg"
              alt=""
              width={18}
              height={18}
              className="invert"
              aria-hidden="true"
            />
            Source Code
          </Button>
          <Button href={project.liveUrl} className="w-full">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live Demo
          </Button>
        </div>
      </Card>

      {enlarged && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Screenshot of ${project.name}`}
          className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close enlarged screenshot"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-full max-h-[90vh] w-full max-w-[90vw]">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
