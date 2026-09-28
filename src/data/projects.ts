// Migrated from my-portfolio (BachiDev/my-portfolio). Single source of truth
// for the landing teaser and the /work portfolio index.

export type ProjectStackItem = {
  name: string;
  /** Absolute path to the icon, e.g. "/tech/react.svg". */
  icon: string;
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  description: string;
  /** One-line outcome — what the project demonstrates. No invented metrics. */
  outcome: string;
  image: string;
  stack: ProjectStackItem[];
  githubUrl: string;
  liveUrl: string;
  /** Featured projects appear in the landing-page teaser; all appear on /work. */
  featured: boolean;
};

const icon = (name: string) => `/tech/${name}.svg`;

export const projects: Project[] = [
  {
    slug: "firebase-webstore",
    name: "Firebase Webstore",
    type: "Fullstack",
    description:
      "A demo e-commerce platform with user authentication and secure payment processing through Stripe, utilizing Webhooks and Cloud Functions to maintain real-time data synchronization.",
    outcome:
      "End-to-end demo shop: auth, Firestore sync, and Stripe payments via Cloud Functions webhooks.",
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
    name: "Hand Gesture Control",
    type: "Machine Learning",
    description:
      "Control a user interface using real-time hand gestures captured from your webcam. This project uses machine learning to recognize specific hand poses and translate them into actions like scrolling and toggling content.",
    outcome:
      "Real-time webcam gesture recognition driving a web UI — scrolling and toggling content hands-free.",
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
    name: "CRM Demo",
    type: "Fullstack",
    description:
      "A demo CRM application featuring a RESTful API and a database, designed to showcase modern web development practices with a focus on clean architecture and robust deployment.",
    outcome:
      "Cleanly layered reference build from Angular UI to containerized PostgreSQL, with a Swagger-documented REST API.",
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
    name: "Weather Dashboard",
    type: "Frontend",
    description:
      "An interactive weather dashboard displaying real-time weather data and forecasts using the free Weather API from Open-Meteo.",
    outcome: "Real-time forecasts on the free Open-Meteo API — no keys, no backend.",
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
    name: "Connect 4",
    type: "Frontend",
    description:
      "A classical game of Connect 4, playable against other players or the computer, hosted on GitHub Pages.",
    outcome: "Playable against a friend or the computer, shipped as a static page.",
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

export const featuredProjects = projects.filter((project) => project.featured);
