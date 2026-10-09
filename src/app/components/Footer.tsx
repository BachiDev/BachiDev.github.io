import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { anchorPath, workPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SocialLinks } from "./ui/SocialLinks";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.footer;
  const nav = t.nav.map((item) => ({
    href: item.id === null ? workPath(locale) : anchorPath(locale, item.id),
    label: item.label,
  }));

  return (
    <footer className="w-full shrink-0 bg-zinc-900 px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-zinc-200">{t.brandName}</p>
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
              aria-label={t.backToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-brand-500/50"
            >
              <ArrowUp className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <div id="imprint" className="scroll-mt-14 text-xs text-zinc-400 sm:text-left">
            <p>{t.imprintTitle}</p>
            {t.imprint.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <br />
            <p>
              {t.emailLabel}{" "}
              <Link href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </Link>
            </p>
            <br />
            <p>{t.businessLine}</p>
            <p>{t.uid}</p>
            <p>{t.court}</p>
            <p>{t.chamber}</p>
          </div>
          <div className="flex flex-col gap-1 sm:ml-auto sm:text-right">
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} {t.brandName}. {t.rights}
            </p>
            <p className="text-xs text-zinc-500">
              {t.builtWith}{" "}
              <Link
                href="https://github.com/BachiDev/BachiDev.github.io"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-300 hover:underline"
              >
                {t.sourceOnGithub}
              </Link>
            </p>
            <p className="text-xs text-zinc-400">{t.privacy}</p>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
}
