import Image from "next/image";
import { Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import { profile } from "@/data/profile";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {profile.socials.map((social) => {
        const isExternal = social.href.startsWith("http");
        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-brand-500/50"
          >
            {social.label === "GitHub" ? (
              <Image
                src="/github.svg"
                alt=""
                width={20}
                height={20}
                className="invert"
                aria-hidden="true"
              />
            ) : (
              <Mail className="h-5 w-5" />
            )}
          </a>
        );
      })}
    </div>
  );
}
