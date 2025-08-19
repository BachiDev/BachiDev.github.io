
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export function Button({ children, href, className, type, onClick }: ButtonProps) {
  const commonClasses = `flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-colors w-full max-w-xs mx-auto cursor-pointer ${className}`;

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={commonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
