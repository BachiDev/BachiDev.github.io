"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Languages, Menu, X } from "lucide-react";
import { Button } from "./Button";
import { anchorPath, homePath, workPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function Header({ locale, switchHref }: { locale: Locale; switchHref: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dict = getDictionary(locale).header;

  const links = dict.nav.map((item) => ({
    href: item.id === null ? workPath(locale) : anchorPath(locale, item.id),
    label: item.label,
  }));

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 flex h-14 w-full items-center bg-zinc-950/80 px-4 backdrop-blur-sm lg:px-6">
        <Link className="flex items-center justify-center" href={homePath(locale)}>
          <Image
            src="/android-chrome-192x192.png"
            alt={dict.logoAlt}
            width={24}
            height={24}
            className="h-6 w-6"
          />
          <span className="ml-2 text-lg font-semibold">Fabian Bachmayer</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              className="text-sm font-medium underline-offset-4 hover:underline"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={switchHref}
            hrefLang={locale === "de" ? "en" : "de"}
            aria-label={dict.switchLabel}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-brand-500/50"
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            {dict.switchShort}
          </Link>
          <Button href={anchorPath(locale, "contact")} size="sm">
            {dict.cta}
          </Button>
        </nav>
        <button
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-zinc-200 hover:bg-white/5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? dict.closeMenu : dict.openMenu}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      {menuOpen && (
        <div id="mobile-menu" className="fixed left-0 top-14 z-40 w-full bg-zinc-950/95 md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                className="text-sm font-medium underline-offset-4 hover:underline"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={switchHref}
              hrefLang={locale === "de" ? "en" : "de"}
              aria-label={dict.switchLabel}
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-brand-500/50"
            >
              <Languages className="h-4 w-4" aria-hidden="true" />
              {dict.switchShort}
            </Link>
            <Button
              href={anchorPath(locale, "contact")}
              size="sm"
              onClick={() => setMenuOpen(false)}
            >
              {dict.cta}
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
