import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-neutral-800">
      <p className="text-xs text-neutral-400">© 2025 Fabian Bachmayer. All rights reserved.</p>
      <div className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-neutral-400 hover:text-purple-400">
              <Image src="/github.svg" alt="Github Icon" width={20} height={20} className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-neutral-400 hover:text-purple-400">
              <Image src="/linkedin.svg" alt="Linkedin Icon" width={20} height={20} className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-neutral-400 hover:text-purple-400">
              <Image src="/twitter.svg" alt="Twitter Icon" width={20} height={20} className="h-5 w-5" />
          </Link>
      </div>
    </footer>
  );
}