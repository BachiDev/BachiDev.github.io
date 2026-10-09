import Image from "next/image";
import { Languages, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { TimelineEntry } from "@/i18n/en";
import { Button } from "./Button";
import { Section } from "./ui/Section";
import { cn } from "@/lib/cn";

export function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.about;
  return (
    <Section id="about" tone="raised" eyebrow={t.eyebrow} title={t.title} align="left">
      <div className="grid items-start gap-12 lg:grid-cols-3">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4 text-zinc-400 md:text-lg">
            {t.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-zinc-300">
              <MapPin className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              {dict.profile.location}
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <Languages className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              {dict.profile.languages}
            </li>
            <li className="flex items-center gap-3 text-zinc-300">
              <Mail className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <a href={`mailto:${profile.email}`} className="hover:text-white hover:underline">
                {profile.email}
              </a>
            </li>
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={t.cvFile} download variant="secondary">
              {t.downloadCv}
            </Button>
            <span className="font-mono text-xs text-zinc-500">{t.cvMeta}</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14),transparent_65%)]"
          />
          <Image
            alt={t.portraitAlt}
            className="relative mx-auto object-contain drop-shadow-2xl"
            height={563}
            src="/me.webp"
            width={443}
            sizes="(max-width: 1024px) 80vw, 320px"
          />
        </div>
        <div>
          <h3 className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-400">
            {t.timelineTitle}
          </h3>
          <ol className="relative space-y-6 border-l border-white/10 pl-8">
            {t.timeline.map((entry: TimelineEntry) => (
              <li key={entry.period + entry.title} className="relative">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[37px] top-1 h-3 w-3 rounded-full ring-4 ring-zinc-900",
                    entry.current ? "bg-emerald-400" : "bg-brand-500",
                  )}
                />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {entry.period}
                  {entry.current ? (
                    <span className="ml-2 text-emerald-400">{t.currentLabel}</span>
                  ) : null}
                </p>
                <p className="mt-1 font-semibold text-zinc-100">{entry.title}</p>
                <p className="mt-0.5 text-sm text-zinc-400">{entry.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
