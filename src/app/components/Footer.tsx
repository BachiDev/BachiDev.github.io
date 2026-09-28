import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialLinks } from "./ui/SocialLinks";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#tech-stack", label: "Tech Stack" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full shrink-0 bg-zinc-900 px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-zinc-200">Fabian Bachmayer</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 underline-offset-4 hover:text-zinc-100 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <SocialLinks />
            <Link
              href="#"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-brand-500/50"
            >
              <ArrowUp className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div id="imprint" className="scroll-mt-14 text-xs text-zinc-400 sm:text-left">
            <p>Imprint:</p>
            <p>Fabian Bachmayer</p>
            <p>Bernoullistraße 4/4/20</p>
            <p>1220 Vienna, Austria</p>
            <br />
            <p>
              Email:{" "}
              <Link href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </Link>
            </p>
            <br />
            <p>Services in automatic data processing and information technology</p>
            <p>UID: ATU79961178</p>
            <p>Court of commercial registration: Commercial Court of Vienna</p>
            <p>Member of the Austrian Economic Chamber</p>
          </div>
          <p className="text-xs text-zinc-400 sm:ml-auto sm:text-right">
            © {new Date().getFullYear()} Fabian Bachmayer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
