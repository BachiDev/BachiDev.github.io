import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  stars: number;
};

export function ProjectCard({ title, description, link, stars }: ProjectCardProps) {
    return (
        <div className="bg-neutral-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-neutral-400 mt-2">{description}</p>
                </div>
                <div className="flex items-center text-neutral-400 shrink-0 ml-4">
                    <Image src="/star.svg" alt="Star Icon" width={16} height={16} className="w-4 h-4 mr-1 text-yellow-400" />
                    <span>{stars}</span>
                </div>
            </div>
            <a href={link} className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300">
                View on GitHub
                <Image src="/arrow-right.svg" alt="Arrow Right Icon" width={16} height={16} className="w-4 h-4 ml-2" />
            </a>
        </div>
    );
}
