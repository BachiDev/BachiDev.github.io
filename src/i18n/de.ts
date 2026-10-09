import type { Dictionary } from "./en";

// German dictionary (Sie-Form). Must satisfy the `Dictionary` type —
// missing keys fail the build.
export const de: Dictionary = {
  locale: "de",
  skipLink: "Zum Inhalt springen",
  site: {
    description:
      "Fabian Bachmayer — Full-Stack-Entwickler in Wien baut moderne Web- und Mobile-Apps, von der Anforderung bis zur Produktion.",
    keywords: [
      "Fabian Bachmayer",
      "Full-Stack-Entwickler",
      "Freelance Entwickler Wien",
      "Webentwickler Wien",
      "Next.js",
      "React",
      "TypeScript",
      "Flutter",
    ],
    ogAlt: "Fabian Bachmayer — Full-Stack-Entwickler",
    jobTitle: "Full-Stack-Entwickler",
    addressLocality: "Wien",
  },
  profile: {
    role: "Full-Stack-Entwickler",
    tagline:
      "Ich baue schnelle, wartbare Web- und Mobile-Apps — von der Anforderung bis zur Produktion.",
    location: "Wien, Österreich (MEZ)",
    languages: "Deutsch (Muttersprache) · Englisch · Spanisch (Grundlagen)",
    availabilityNote: "Verfügbar für neue Projekte",
  },
  header: {
    logoAlt: "Fabian Bachmayer Logo",
    nav: [
      { id: "services", label: "Leistungen" },
      { id: null, label: "Arbeit" },
      { id: "about", label: "Über mich" },
      { id: "tech-stack", label: "Tech-Stack" },
      { id: "process", label: "Ablauf" },
      { id: "contact", label: "Kontakt" },
    ],
    cta: "Kontakt aufnehmen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    switchLabel: "Switch to English",
    switchShort: "EN",
  },
  hero: {
    locationSuffix: "Wien / Remote",
    ctaWork: "Meine Arbeit ansehen",
    ctaContact: "Kontakt aufnehmen",
  },
  services: {
    eyebrow: "Leistungen",
    title: "Was ich für Sie tun kann",
    lede: "Vier fokussierte Angebote — jedes endet mit einem live geschalteten Produkt, nicht mit Folien.",
    items: [
      {
        title: "Webentwicklung",
        description:
          "Moderne, responsive und performante Web-Apps mit React, Next.js und TypeScript.",
        points: [
          "Responsive, barrierefreie Interfaces",
          "SEO-freundliches Server-Rendering",
          "Bereitgestellt, überwacht, dokumentiert",
        ],
      },
      {
        title: "Mobile Entwicklung",
        description:
          "Benutzerfreundliche Mobile-Apps für iOS und Android aus einer einzigen Flutter-Codebasis.",
        points: [
          "Eine Codebasis, beide Plattformen",
          "Natives Look & Feel",
          "Store-Release-Abwicklung",
        ],
      },
      {
        title: "API & Daten",
        description:
          "REST-APIs und Datenbanken — konzipiert für Skalierbarkeit, Sicherheit und einfache Wartung.",
        points: [
          "Dokumentierte REST-APIs",
          "PostgreSQL- / Firestore-Datenmodelle",
          "Auth, Stripe-Zahlungen, Cloud-Deploys",
        ],
      },
      {
        title: "Qualität & Lieferung",
        description:
          "Von der Anforderung bis zur Produktion: geplant, getestet, automatisiert und live geschaltet.",
        points: [
          "Anforderungsanalyse",
          "Automatisierte Tests + CI/CD",
          "Launch & Support nach Go-live",
        ],
      },
    ],
  },
  workTeaser: {
    eyebrow: "Ausgewählte Arbeiten",
    title: "Beweise statt Versprechen",
    lede: "Einige Projekte, die zeigen, wie ich arbeite — von Enterprise-Java bis zu Machine-Learning-Experimenten.",
    cta: "Alle Arbeiten ansehen",
  },
  workPage: {
    metaTitle: "Ausgewählte Arbeiten",
    metaDescription:
      "Ausgewählte Projekte von Fabian Bachmayer — Full-Stack-Web-Apps, Machine Learning und Frontend-Projekte.",
    eyebrow: "Portfolio",
    title: "Ausgewählte Arbeiten",
    lede: "Jedes Projekt unten ist live und Open Source — klicken Sie sich durch, testen Sie die Demos, lesen Sie den Code.",
    ctaText: "Gefällt Ihnen, was Sie sehen? Lassen Sie uns über Ihr Projekt sprechen.",
    ctaPrimary: "Kontakt aufnehmen",
    ctaSecondary: "Zurück zur Übersicht",
  },
  projects: {
    "firebase-webstore": {
      name: "Firebase Webstore",
      type: "Fullstack",
      description:
        "Eine Demo-E-Commerce-Plattform mit Benutzerauthentifizierung und sicherer Zahlungsabwicklung über Stripe — mit Webhooks und Cloud Functions für Echtzeit-Datensynchronisation.",
      outcome:
        "Kompletter Demo-Shop: Auth, Firestore-Sync und Stripe-Zahlungen via Cloud-Functions-Webhooks.",
    },
    "hand-gesture-control": {
      name: "Hand Gesture Control",
      type: "Maschinelles Lernen",
      description:
        "Steuern Sie eine Benutzeroberfläche mit Echtzeit-Handgesten Ihrer Webcam. Machine Learning erkennt bestimmte Handhaltungen und übersetzt sie in Aktionen wie Scrollen und Umschalten von Inhalten.",
      outcome:
        "Echtzeit-Gestenerkennung per Webcam steuert ein Web-UI — freihändiges Scrollen und Umschalten.",
    },
    "crm-demo": {
      name: "CRM Demo",
      type: "Fullstack",
      description:
        "Eine Demo-CRM-Anwendung mit RESTful API und Datenbank — moderne Webentwicklung mit Fokus auf saubere Architektur und robustes Deployment.",
      outcome:
        "Sauber geschichteter Referenzbau vom Angular-UI bis zum containerisierten PostgreSQL, mit Swagger-dokumentierter REST-API.",
    },
    "weather-dashboard": {
      name: "Weather Dashboard",
      type: "Frontend",
      description:
        "Ein interaktives Wetter-Dashboard mit Echtzeit-Wetterdaten und Vorhersagen über die kostenlose Wetter-API von Open-Meteo.",
      outcome:
        "Echtzeit-Vorhersagen über die kostenlose Open-Meteo-API — keine Keys, kein Backend.",
    },
    "connect-4": {
      name: "Connect 4",
      type: "Frontend",
      description:
        "Das klassische Vier-gewinnt-Spiel — gegen andere oder den Computer spielbar, gehostet auf GitHub Pages.",
      outcome: "Spielbar gegen Freunde oder den Computer, als statische Seite bereitgestellt.",
    },
  },
  projectCard: {
    enlargeScreenshot: "Screenshot von",
    screenshotAlt: "Screenshot von",
    closeEnlarged: "Vergrößerten Screenshot schließen",
    sourceCode: "Quellcode",
    liveDemo: "Live-Demo",
  },
  about: {
    eyebrow: "Über",
    title: "Über mich",
    paragraphs: [
      "Ich bin Full-Stack-Entwickler in Wien. Angefangen habe ich in der Telekommunikation — Abrechnungssysteme und Zahlungsintegrationen bei spusu — parallel zum Wirtschaftsinformatik-Studium.",
      "Seit 2023 bin ich freiberuflich tätig: moderne Web- und Mobile-Apps, REST-APIs und Machine-Learning-Projekte, plus Training großer Sprachmodelle. Ich begleite Projekte vom ersten Anforderungsgespräch bis zur bereitgestellten, dokumentierten Produktionssoftware.",
    ],
    portraitAlt: "Fabian Bachmayer",
    downloadCv: "CV herunterladen",
    cvMeta: "PDF · 1 Seite",
    cvFile: "/Fabian-Bachmayer-CV-DE.pdf",
    timelineTitle: "Mein Weg bisher",
    currentLabel: "· aktuell",
    timeline: [
      {
        period: "2016",
        title: "HAK Donaustadt",
        detail: "Matura mit Schwerpunkt Informations- und Kommunikationstechnologie.",
      },
      {
        period: "2016–17",
        title: "Zivildienst",
        detail: "Abgeleistet.",
      },
      {
        period: "2017–18",
        title: "TU Wien",
        detail: "Technische Mathematik, inkl. C/C++-Programmierung.",
      },
      {
        period: "2018–22",
        title: "FH Technikum Wien",
        detail: "Wirtschaftsinformatik — Studium neben dem ersten Entwicklerjob.",
      },
      {
        period: "2021–22",
        title: "Full-Stack-Entwickler, spusu",
        detail: "Telekom-Abrechnungssysteme, Zahlungsintegrationen, Rechnungsautomatisierung.",
      },
      {
        period: "2023–heute",
        title: "Freiberuflicher Entwickler & KI-Tutor",
        detail: "Web- und Mobile-Projekte für Kunden, plus LLM-Training (RLHF).",
        current: true,
      },
    ],
  },
  tech: {
    eyebrow: "Tech-Stack",
    title: "Mein Tech-Stack",
    lede: "Eine Auswahl der Technologien, mit denen ich moderne Webanwendungen baue.",
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
        title: "Datenbanken",
        skills: ["PostgreSQL", "MySQL", "Firestore", "PL/SQL"],
      },
      {
        title: "Cloud-Dienste",
        skills: ["Google Cloud", "Firebase", "Supabase", "Vercel", "Render"],
      },
      {
        title: "Tests",
        skills: ["JUnit", "Mockito"],
      },
      {
        title: "Sonstiges",
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
    eyebrow: "Arbeitsweise",
    title: "Von der Idee zur Produktion",
    lede: "Ein schlanker Prozess, der Überraschungen klein und Fortschritt sichtbar hält.",
    steps: [
      {
        n: "01",
        title: "Entdecken",
        text: "In einem kurzen Intro-Call klären wir Ziele, Anforderungen und Erfolgskriterien — kein 20-seitiges Pflichtenheft nötig.",
      },
      {
        n: "02",
        title: "Bauen",
        text: "Wöchentliche Inkremente, die Sie früh anklicken können; Prioritäten bleiben anpassbar, während wir mehr lernen.",
      },
      {
        n: "03",
        title: "Testen & härten",
        text: "Automatisierte Tests plus Barrierefreiheits- und Performance-Checks, bevor etwas live geht.",
      },
      {
        n: "04",
        title: "Liefern & betreuen",
        text: "Bereitgestellt, überwacht und dokumentiert — mit Support nach dem Go-live.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt aufnehmen",
    lede: "Haben Sie ein Projekt im Sinn? Ich freue mich, von Ihnen zu hören.",
    pitch:
      "Erzählen Sie mir von Ihrem Projekt — was Sie bauen möchten, Ihren Zeitrahmen und wo Sie sind. Ich antworte in der Regel innerhalb von 48 Stunden.",
    replyNote: "Antwort innerhalb von 48 Stunden",
    faqTitle: "Häufige Fragen",
    availabilityQuestion: "Sind Sie für neue Projekte verfügbar?",
    availabilityAnswerAvailable:
      "Ja — ich bin derzeit für neue Projekte verfügbar, sowohl für freiberufliche Verträge als auch für Festpreis-Projekte.",
    availabilityAnswerBooked:
      "Ich bin derzeit voll ausgelastet, aber schreiben Sie mir gerne — wir können über den Zeitrahmen für Ihr Projekt sprechen.",
    faqs: [
      {
        question: "Wie läuft eine Zusammenarbeit üblicherweise ab?",
        answer:
          "Wir starten mit einem kurzen Intro-Call, um Ziele und Erfolgskriterien zu klären. Sie erhalten dann ein Festpreis-Angebot, und wir bauen in wöchentlichen Inkrementen, die Sie prüfen können — keine Überraschungen am Ende.",
      },
      {
        question: "Arbeiten Sie vor Ort oder remote?",
        answer:
          "Ich bin in Wien, Österreich (MEZ) ansässig und arbeite remote mit Kunden weltweit. Vor-Ort-Zusammenarbeit im Raum Wien ist auf Anfrage möglich.",
      },
    ],
  },
  form: {
    nameLabel: "Ihr Name",
    emailLabel: "Ihre E-Mail",
    messageLabel: "Ihre Nachricht",
    send: "Nachricht senden",
    sending: "Wird gesendet…",
    sendingStatus: "Wird gesendet…",
    success: "Nachricht gesendet — ich melde mich bald bei Ihnen.",
    errorFallback:
      "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt.",
    unavailable: "Das Kontaktformular ist derzeit nicht verfügbar. Bitte schreiben Sie direkt an",
  },
  footer: {
    nav: [
      { id: "services", label: "Leistungen" },
      { id: null, label: "Arbeit" },
      { id: "about", label: "Über" },
      { id: "tech-stack", label: "Tech-Stack" },
      { id: "contact", label: "Kontakt" },
    ],
    brandName: "Fabian Bachmayer",
    backToTop: "Nach oben",
    imprintTitle: "Impressum:",
    imprint: ["Fabian Bachmayer", "Bernoullistraße 4/4/20", "1220 Wien, Österreich"],
    emailLabel: "E-Mail:",
    businessLine: "Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik",
    uid: "UID: ATU79961178",
    court: "Handelsgericht: Handelsgericht Wien",
    chamber: "Mitglied der Wirtschaftskammer Österreich",
    rights: "Alle Rechte vorbehalten.",
    builtWith: "Erstellt mit Next.js & Tailwind —",
    sourceOnGithub: "Quellcode auf GitHub",
    privacy:
      "Datenschutz: keine Cookies, kein Tracking. Formularnachrichten werden via Web3Forms per E-Mail zugestellt und nie weitergegeben.",
  },
};
