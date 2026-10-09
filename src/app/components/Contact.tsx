"use client";
import { Mail, MapPin, Timer } from "lucide-react";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Button } from "./Button";
import { Section } from "./ui/Section";
import { SocialLinks } from "./ui/SocialLinks";
import { Web3ContactForm } from "./Web3ContactForm";

export function Contact({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.contact;
  const faqs = [
    {
      question: t.availabilityQuestion,
      answer: profile.available ? t.availabilityAnswerAvailable : t.availabilityAnswerBooked,
    },
    ...t.faqs,
  ];

  return (
    <Section id="contact" eyebrow={t.eyebrow} title={t.title} lede={t.lede}>
      <div className="grid items-start gap-12 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <p className="text-zinc-400">{t.pitch}</p>
          <ul className="space-y-4 text-sm">
            <li>
              <Button
                href={`mailto:${profile.email}`}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {profile.email}
              </Button>
            </li>
            <li className="flex items-center gap-3 text-zinc-400">
              <MapPin className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              {dict.profile.location} · {dict.profile.languages}
            </li>
            <li className="flex items-center gap-3 text-zinc-400">
              <Timer className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              {t.replyNote}
            </li>
          </ul>
          <SocialLinks />
        </div>
        <div className="lg:col-span-3">
          <Web3ContactForm locale={locale} />
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-3xl">
        <h3 className="mb-6 text-center text-xl font-bold">{t.faqTitle}</h3>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4"
            >
              <summary className="cursor-pointer font-medium text-zinc-100 transition-colors hover:text-white">
                {faq.question}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
