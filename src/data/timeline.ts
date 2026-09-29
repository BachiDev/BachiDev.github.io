// Career timeline for the About section. Keep entries short —
// one line of detail max. Current entry gets highlighted.

export type TimelineEntry = {
  period: string;
  title: string;
  detail: string;
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
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
];
