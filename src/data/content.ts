// Copy blocks for the Open Source, Engineering Focus, and Experience/Journey
// sections. No statistics are fabricated — the open-source stat cards read
// "—" until real numbers are added.

export const openSource = {
  eyebrow: "// open-source",
  heading: "Building in the open",
  description:
    "I contribute to open-source software and am continuously working to become an active member of the global developer community. The numbers below are pulled live from GitHub — nothing here is pre-filled.",
  ctaLabel: "View GitHub Activity",
  ctaUrl: "https://github.com/anasqadri-dev",
};

export type FocusArea = {
  title: string;
  description: string;
};

export const engineeringFocus: FocusArea[] = [
  {
    title: "Backend Systems",
    description:
      "Designing APIs and services in Java and Spring Boot, with attention to correctness, security, and maintainability.",
  },
  {
    title: "System Design",
    description:
      "Learning to reason about scalability, data modeling, and trade-offs in real-world backend architecture.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Building working knowledge of cloud deployment and infrastructure to support backend services in production.",
  },
  {
    title: "DevOps",
    description:
      "Practicing containerization and CI/CD workflows so software ships in a repeatable, reliable way.",
  },
  {
    title: "Distributed Systems",
    description:
      "Studying how services communicate, stay consistent, and remain resilient at scale.",
  },
  {
    title: "Open Source",
    description:
      "Contributing to public projects and building software in the open as part of the broader developer community.",
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
  tags: string[];
};

// Education and teaching experience only — update dates as needed.
export const timeline: TimelineEntry[] = [
  {
    period: "Ongoing",
    title: "B.S. Software Engineering — Sukkur IBA University",
    description:
      "3rd-year coursework spanning software architecture, requirements engineering, distributed systems, and core computer science fundamentals.",
    tags: ["Software Design", "System Design", "Computer Science"],
  },
  {
    period: "Past Experience",
    title: "IT Instructor — Halar Institute of Emerging Technologies",
    description:
      "Taught programming and technology courses, guiding students through core concepts and hands-on practice.",
    tags: ["Teaching", "Mentorship"],
  },
];
