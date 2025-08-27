import { JSX } from "react";

type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="items-center text-center border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col h-full font-mono transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)]">
      <div className="mb-4 text-purple-400">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}
