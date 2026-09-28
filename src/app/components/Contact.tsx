"use client";
import { Mail, MapPin, Timer } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "./Button";
import { Section } from "./ui/Section";
import { SocialLinks } from "./ui/SocialLinks";
import { Web3ContactForm } from "./Web3ContactForm";

const faqs = [
  {
    question: "Are you available for new projects?",
    answer: profile.available
      ? "Yes — I'm currently available for new projects, both freelance contracts and fixed-scope builds."
      : "I'm fully booked right now, but feel free to reach out — we can talk about timing for your project.",
  },
  {
    question: "How do engagements usually work?",
    answer:
      "We start with a short intro call to scope goals and success criteria. You then get a fixed-scope proposal, and we build in weekly increments you can review — no big-bang surprises.",
  },
  {
    question: "Do you work on-site or remote?",
    answer:
      "I'm based in Vienna, Austria (CET) and work remotely with clients worldwide. On-site collaboration in the Vienna area is possible on request.",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in Touch"
      lede="Have a project in mind? I'd love to hear from you."
    >
      <div className="grid items-start gap-12 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <p className="text-zinc-400">
            Tell me about your project — what you want to build, your timeline, and where you are. I
            usually reply within 48 hours.
          </p>
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
              {profile.location} · {profile.languages}
            </li>
            <li className="flex items-center gap-3 text-zinc-400">
              <Timer className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              Replies within 48 hours
            </li>
          </ul>
          <SocialLinks />
        </div>
        <div className="lg:col-span-3">
          <Web3ContactForm />
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-3xl">
        <h3 className="mb-6 text-center text-xl font-bold">Common questions</h3>
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
