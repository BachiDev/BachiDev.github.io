"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "../components/Button";

/**
 * Backwards-compat shim: the portfolio used to live at /my-portfolio/
 * (BachiDev/my-portfolio repo). It now lives at /work — redirect there.
 */
export default function MyPortfolioRedirect() {
  useEffect(() => {
    window.location.replace("/work");
  }, []);

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold tracking-tight">My portfolio moved</h1>
      <p className="max-w-md text-zinc-400">
        You&apos;ll be redirected to the new location in a moment. If nothing happens, use the
        button below.
      </p>
      <Button href="/work" size="lg">
        Go to Selected Work
      </Button>
      <Link href="/" className="text-sm text-zinc-400 underline-offset-4 hover:underline">
        Back to Overview
      </Link>
    </main>
  );
}
