import type { Locale } from "./config";

export type TimelineEntry = {
  period: string;
  title: string;
  detail: string;
  current?: boolean;
};

// English dictionary. Single source of truth for all user-visible EN copy.
// src/i18n/de.ts must satisfy the same `Dictionary` type — the compiler
// enforces that no key is missing in either language.
export const en = {
  locale: "en" as Locale,
  skipLink: "Skip to content",
  site: {
    description:
      "Fabian Bachmayer — Full-Stack Developer in Vienna building modern web and mobile apps, from requirements to production.",
    keywords: [
      "Fabian Bachmayer",
      "Full-Stack Developer",
      "Freelance Developer Vienna",
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
    ],
    ogAlt: "Fabian Bachmayer — Full-Stack Developer",
    jobTitle: "Full-Stack Developer",
    addressLocality: "Vienna",
  },
  profile: {
    role: "Full-Stack Developer",
    tagline: "I build fast, maintainable web and mobile apps — from requirements to production.",
    location: "Vienna, Austria (CET)",
    languages: "German (Native) · English · Spanish (basics)",
    availabilityNote: "Available for new projects",
  },
  header: {
    logoAlt: "Fabian Bachmayer Logo",
    nav: [
      { id: "services", label: "Services" },
      { id: null, label: "Work" },
      { id: "about", label: "About Me" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "process", label: "Process" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Get in Touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "Zu Deutsch wechseln",
    switchShort: "DE",
  },
  hero: {
    locationSuffix: "Vienna / Remote",
    ctaWork: "View My Work",
    ctaContact: "Get in Touch",
  },
  services: {
    eyebrow: "Services",
    title: "What I can do for you",
    lede: "Four focused offers — each one ends with something live, not a slide deck.",
    items: [
      {
        title: "Web Development",
        description:
          "Modern, responsive, and performant web apps built with React, Next.js, and TypeScript.",
        points: [
          "Responsive, accessible interfaces",
          "SEO-friendly server rendering",
          "Deployed, monitored, documented",
        ],
      },
      {
        title: "Mobile Development",
        description:
          "User-friendly mobile apps for iOS and Android from a single Flutter codebase.",
        points: ["One codebase, both platforms", "Native-feel UI", "Store release handling"],
      },
      {
        title: "API & Data",
        description:
          "REST APIs and databases designed to be scalable, secure, and easy to maintain.",
        points: [
          "Documented REST APIs",
          "PostgreSQL / Firestore data models",
          "Auth, Stripe payments, cloud deploys",
        ],
      },
      {
        title: "Quality & Delivery",
        description: "From requirements to production: scoped, tested, automated, and launched.",
        points: ["Requirements scoping", "Automated tests + CI/CD", "Launch & post-launch support"],
      },
    ],
  },
  workTeaser: {
    eyebrow: "Selected Work",
    title: "Proof, not promises",
    lede: "A few projects that show how I work — from enterprise Java to machine-learning experiments.",
    cta: "See all work",
  },
  workPage: {
    metaTitle: "Selected Work",
    metaDescription:
      "Selected projects by Fabian Bachmayer — full-stack web apps, machine learning, and frontend builds.",
    eyebrow: "Portfolio",
    title: "Selected Work",
    lede: "Every project below is live and open source — click through, try the demos, read the code.",
    ctaText: "Like what you see? Let's talk about your project.",
    ctaPrimary: "Get in Touch",
    ctaSecondary: "Back to Overview",
  },
  projects: {
    "firebase-webstore": {
      name: "Firebase Webstore",
      type: "Fullstack",
      description:
        "A demo e-commerce platform with user authentication and secure payment processing through Stripe, utilizing Webhooks and Cloud Functions to maintain real-time data synchronization.",
      outcome:
        "End-to-end demo shop: auth, Firestore sync, and Stripe payments via Cloud Functions webhooks.",
    },
    "hand-gesture-control": {
      name: "Hand Gesture Control",
      type: "Machine Learning",
      description:
        "Control a user interface using real-time hand gestures captured from your webcam. This project uses machine learning to recognize specific hand poses and translate them into actions like scrolling and toggling content.",
      outcome:
        "Real-time webcam gesture recognition driving a web UI — scrolling and toggling content hands-free.",
    },
    "crm-demo": {
      name: "CRM Demo",
      type: "Fullstack",
      description:
        "A demo CRM application featuring a RESTful API and a database, designed to showcase modern web development practices with a focus on clean architecture and robust deployment.",
      outcome:
        "Cleanly layered reference build from Angular UI to containerized PostgreSQL, with a Swagger-documented REST API.",
    },
    "weather-dashboard": {
      name: "Weather Dashboard",
      type: "Frontend",
      description:
        "An interactive weather dashboard displaying real-time weather data and forecasts using the free Weather API from Open-Meteo.",
      outcome: "Real-time forecasts on the free Open-Meteo API — no keys, no backend.",
    },
    "connect-4": {
      name: "Connect 4",
      type: "Frontend",
      description:
        "A classical game of Connect 4, playable against other players or the computer, hosted on GitHub Pages.",
      outcome: "Playable against a friend or the computer, shipped as a static page.",
    },
  } as Record<string, { name: string; type: string; description: string; outcome: string }>,
  projectCard: {
    enlargeScreenshot: "Enlarge screenshot of",
    screenshotAlt: "Screenshot of",
    closeEnlarged: "Close enlarged screenshot",
    sourceCode: "Source Code",
    liveDemo: "Live Demo",
  },
  about: {
    eyebrow: "About",
    title: "About Me",
    paragraphs: [
      "I'm a Full-Stack Developer in Vienna. I started out in telecommunications — building billing systems and payment integrations at spusu — while finishing my Business Informatics coursework.",
      "Since 2023 I've been freelancing: modern web and mobile apps, REST APIs, and machine-learning projects, plus training large language models. I take projects from the first requirements call to deployed, documented production software.",
    ],
    portraitAlt: "Fabian Bachmayer",
    downloadCv: "Download CV",
    cvMeta: "PDF · 1 page",
    cvFile: "/Fabian-Bachmayer-CV.pdf",
    timelineTitle: "My path so far",
    currentLabel: "· current",
    timeline: [
      {
        period: "2016",
        title: "HAK Donaustadt",
        detail: "Graduated with a focus on Information and Communication Technology.",
      },
      {
        period: "2016–17",
        title: "Federal Civil Service",
        detail: "Completed.",
      },
      {
        period: "2017–18",
        title: "TU Wien",
        detail: "Technical Mathematics, incl. C/C++ programming.",
      },
      {
        period: "2018–22",
        title: "Technikum Vienna",
        detail: "Business Informatics — coursework alongside my first developer job.",
      },
      {
        period: "2021–22",
        title: "Full-Stack Developer, spusu",
        detail: "Telecom billing systems, payment integrations, invoice automation.",
      },
      {
        period: "2023–now",
        title: "Freelance Developer & AI Tutor",
        detail: "Web and mobile builds for clients, plus LLM training (RLHF).",
        current: true,
      },
    ],
  },
  tech: {
    eyebrow: "Tech Stack",
    title: "My Tech Stack",
    lede: "A selection of technologies I use to build modern web applications.",
    groups: [
      {
        title: "Frontend",
        skills: [
          "React",
          "Next.js",
          "Angular",
          "Flutter",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind",
          "Bootstrap",
        ],
      },
      {
        title: "Backend",
        skills: ["Node.js", "Java", "Spring Boot", "Hibernate", "Swagger", "Python"],
      },
      {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "Firestore", "PL/SQL"],
      },
      {
        title: "Cloud Services",
        skills: ["Google Cloud", "Firebase", "Supabase", "Vercel", "Render"],
      },
      {
        title: "Testing",
        skills: ["JUnit", "Mockito"],
      },
      {
        title: "Other",
        skills: [
          "Git",
          "Docker",
          "CI/CD",
          "Agile",
          "Scrum",
          "BPMN",
          "Turbopack",
          "Gradle",
          "Maven",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How I work",
    title: "From idea to production",
    lede: "A lightweight process that keeps surprises small and progress visible.",
    steps: [
      {
        n: "01",
        title: "Discover",
        text: "We scope goals, requirements, and success criteria in a short intro call — no 20-page spec needed up front.",
      },
      {
        n: "02",
        title: "Build",
        text: "Weekly increments you can click through early; priorities stay adjustable as we learn more.",
      },
      {
        n: "03",
        title: "Test & harden",
        text: "Automated tests plus accessibility and performance checks before anything ships.",
      },
      {
        n: "04",
        title: "Ship & support",
        text: "Deployed, monitored, and documented — with support after go-live.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in Touch",
    lede: "Have a project in mind? I'd love to hear from you.",
    pitch:
      "Tell me about your project — what you want to build, your timeline, and where you are. I usually reply within 48 hours.",
    replyNote: "Replies within 48 hours",
    faqTitle: "Common questions",
    availabilityQuestion: "Are you available for new projects?",
    availabilityAnswerAvailable:
      "Yes — I'm currently available for new projects, both freelance contracts and fixed-scope builds.",
    availabilityAnswerBooked:
      "I'm fully booked right now, but feel free to reach out — we can talk about timing for your project.",
    faqs: [
      {
        question: "How do engagements usually work?",
        answer:
          "We start with a short intro call to scope goals and success criteria. You then get a fixed-scope proposal, and we build in weekly increments you can review — no big-bang surprises.",
      },
      {
        question: "Do you work on-site or remote?",
        answer:
          "I'm based in Vienna, Austria (CET) and work remotely with clients worldwide. On-site collaboration in the Vienna area is possible on request.",
      },
    ],
  },
  form: {
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    send: "Send Message",
    sending: "Sending…",
    sendingStatus: "Sending…",
    success: "Message sent — I'll get back to you soon.",
    errorFallback: "Something went wrong. Please try again or email me directly.",
    unavailable: "The contact form is currently unavailable. Please reach out directly at",
  },
  footer: {
    nav: [
      { id: "services", label: "Services" },
      { id: null, label: "Work" },
      { id: "about", label: "About" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "contact", label: "Contact" },
    ],
    brandName: "Fabian Bachmayer",
    backToTop: "Back to top",
    imprintTitle: "Imprint:",
    imprint: ["Fabian Bachmayer", "Bernoullistraße 4/4/20", "1220 Vienna, Austria"],
    emailLabel: "Email:",
    businessLine: "Services in automatic data processing and information technology",
    uid: "UID: ATU79961178",
    court: "Court of commercial registration: Commercial Court of Vienna",
    chamber: "Member of the Austrian Economic Chamber",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js & Tailwind —",
    sourceOnGithub: "source on GitHub",
    privacy:
      "Privacy: no cookies, no tracking. Contact form messages are emailed via Web3Forms and never shared.",
  },
};

export type Dictionary = typeof en;
