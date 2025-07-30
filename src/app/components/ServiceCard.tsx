import { JSX } from "react";

type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-neutral-900 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="mb-4 text-purple-400">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  );
}
