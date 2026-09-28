"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About Me" },
  { href: "/#tech-stack", label: "Tech Stack" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="/android-chrome-192x192.png"
            alt="Fabian Bachmayer Logo"
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
          <Button href="/#contact" size="sm">
            Get in Touch
          </Button>
        </nav>
        <button
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-zinc-200 hover:bg-white/5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            <Button href="/#contact" size="sm" onClick={() => setMenuOpen(false)}>
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
