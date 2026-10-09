// Migrated from my-portfolio (BachiDev/my-portfolio). Single source of truth
// for the landing teaser and the /work portfolio index.
//
// Locale-neutral fields (slugs, images, stack icons, URLs) live here.
// Translatable copy (name, type, description, outcome) lives in
// src/i18n/{en,de}.ts and is merged via getProjects(locale).
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export type ProjectStackItem = {
  name: string;
  /** Absolute path to the icon, e.g. "/tech/react.svg". */
  icon: string;
};

export type ProjectBase = {
  slug: string;
  image: string;
  stack: ProjectStackItem[];
  githubUrl: string;
  liveUrl: string;
  /** Featured projects appear in the landing-page teaser; all appear on /work. */
  featured: boolean;
};

export type Project = ProjectBase & {
  name: string;
  type: string;
  description: string;
  /** One-line outcome — what the project demonstrates. No invented metrics. */
  outcome: string;
};

const icon = (name: string) => `/tech/${name}.svg`;

const projectBases: ProjectBase[] = [
  {
    slug: "firebase-webstore",
    image: "/work/webstore.webp",
    stack: [
      { name: "Google Cloud", icon: icon("google-cloud") },
      { name: "Firebase", icon: icon("firebase") },
      { name: "Firestore", icon: icon("firestore") },
      { name: "Cloud Functions", icon: icon("cloud-functions") },
      { name: "Stripe", icon: icon("stripe") },
      { name: "Next.js", icon: icon("next") },
      { name: "React", icon: icon("react") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "Tailwind CSS", icon: icon("tailwind") },
    ],
    githubUrl: "https://github.com/BachiDev/webstore",
    liveUrl: "https://bachidev-webstore.web.app/",
    featured: true,
  },
  {
    slug: "hand-gesture-control",
    image: "/work/hand-gesture-control.webp",
    stack: [
      { name: "TensorFlow", icon: icon("tensorflow") },
      { name: "Machine Learning", icon: icon("machine-learning") },
      { name: "Next.js", icon: icon("next") },
      { name: "React", icon: icon("react") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "Tailwind CSS", icon: icon("tailwind") },
    ],
    githubUrl: "https://github.com/BachiDev/hand-gesture-control",
    liveUrl: "https://bachidev.github.io/hand-gesture-control/",
    featured: true,
  },
  {
    slug: "crm-demo",
    image: "/work/crm-demo.webp",
    stack: [
      { name: "Angular", icon: icon("angular") },
      { name: "Spring Boot", icon: icon("spring-boot") },
      { name: "Hibernate", icon: icon("hibernate") },
      { name: "Java", icon: icon("java") },
      { name: "PostgreSQL", icon: icon("postgresql") },
      { name: "Docker", icon: icon("docker") },
      { name: "Gradle", icon: icon("gradle") },
      { name: "Swagger", icon: icon("swagger") },
      { name: "API", icon: icon("api") },
    ],
    githubUrl: "https://github.com/BachiDev/crm-demo",
    liveUrl: "https://bachidev.github.io/crm-demo",
    featured: true,
  },
  {
    slug: "weather-dashboard",
    image: "/work/weather.webp",
    stack: [
      { name: "Next.js", icon: icon("next") },
      { name: "React", icon: icon("react") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "Tailwind CSS", icon: icon("tailwind") },
      { name: "API", icon: icon("api") },
      { name: "JSON", icon: icon("json") },
    ],
    githubUrl: "https://github.com/BachiDev/weather",
    liveUrl: "https://bachidev.github.io/weather/",
    featured: false,
  },
  {
    slug: "connect-4",
    image: "/work/connect4.webp",
    stack: [
      { name: "Next.js", icon: icon("next") },
      { name: "React", icon: icon("react") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "Tailwind CSS", icon: icon("tailwind") },
    ],
    githubUrl: "https://github.com/BachiDev/Connect-4",
    liveUrl: "https://bachidev.github.io/Connect-4/",
    featured: false,
  },
];

export function getProjects(locale: Locale): Project[] {
  const dict = getDictionary(locale);
  return projectBases.map((base) => ({
    ...base,
    ...dict.projects[base.slug],
  }));
}

export function getFeaturedProjects(locale: Locale): Project[] {
  return getProjects(locale).filter((project) => project.featured);
}
