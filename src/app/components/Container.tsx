
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Container({ children, id, className }: ContainerProps) {
  return (
    <section id={id} className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
      <div className="max-w-screen-lg mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
