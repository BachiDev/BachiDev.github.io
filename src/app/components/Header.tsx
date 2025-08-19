'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 w-full bg-neutral-950 bg-opacity-80 backdrop-blur-sm z-50">
        <Link className="flex items-center justify-center" href="#">
          <Image src="/android-chrome-192x192.png" alt="Fabian Bachmayer Logo" width={24} height={24} className="h-6 w-6 text-purple-400" />
          <span className="ml-2 text-lg font-semibold">Fabian Bachmayer</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </Link>
          
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About Me
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#tech-stack">
            Tech Stack
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
          <Button href="https://bachidev.github.io/my-portfolio/" className="!w-auto !max-w-none">Portfolio</Button>
        </nav>
        <button className="ml-auto md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Image src="/menu.svg" alt="Menu Icon" width={24} height={24} className="h-6 w-6" />
        </button>
      </header>
      {menuOpen && (
        <div className="fixed top-14 left-0 w-full bg-neutral-950 bg-opacity-95 z-40 md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about" onClick={() => setMenuOpen(false)}>
              About Me
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#tech-stack" onClick={() => setMenuOpen(false)}>
              Tech Stack
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Button href="https://bachidev.github.io/my-portfolio/" onClick={() => setMenuOpen(false)} className="!w-auto !max-w-none">Portfolio</Button>
          </nav>
        </div>
      )}
    </>
  );
}