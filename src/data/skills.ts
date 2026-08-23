// Skills are grouped by category. `simpleIcon` must match a slug from the
// `simple-icons` package (used for real brand logos). When a technology has
// no accurate brand mark (protocols, specs, concepts), omit `simpleIcon` —
// the UI renders a neutral Lucide glyph instead of a fabricated logo.

export type Skill = {
  name: string;
  simpleIcon?: string;
  // Lucide icon name used only when simpleIcon is not available.
  fallbackIcon?: "network" | "database" | "shield" | "terminal" | "boxes" | "cloud" | "code";
};

export type SkillGroup = {
  title: string;
  eyebrow: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    eyebrow: "core",
    skills: [
      { name: "Java", simpleIcon: "openjdk" },
      { name: "Spring Boot", simpleIcon: "spring" },
      { name: "Spring MVC", simpleIcon: "spring" },
      { name: "Spring Data JPA", simpleIcon: "spring" },
      { name: "Hibernate", simpleIcon: "hibernate" },
      { name: "Servlets & JSP", fallbackIcon: "code" },
      { name: "Thymeleaf", simpleIcon: "thymeleaf" },
      { name: "REST APIs", fallbackIcon: "network" },
      { name: "WebSockets", fallbackIcon: "network" },
      { name: "STOMP", fallbackIcon: "network" },
      { name: "OAuth", fallbackIcon: "shield" },
      { name: "JWT", simpleIcon: "jsonwebtokens" },
      { name: "Maven", simpleIcon: "apachemaven" },
      { name: "Spring Security", simpleIcon: "springsecurity" },
    ],
  },
  {
    title: "Frontend",
    eyebrow: "interface",
    skills: [
      { name: "React", simpleIcon: "react" },
      { name: "Next.js", simpleIcon: "nextdotjs" },
      { name: "TypeScript", simpleIcon: "typescript" },
      { name: "JavaScript", simpleIcon: "javascript" },
      { name: "HTML5", simpleIcon: "html5" },
      { name: "CSS3", simpleIcon: "css3" },
      { name: "Tailwind CSS", simpleIcon: "tailwindcss" },
      { name: "GSAP", simpleIcon: "greensock" },
      { name: "Three.js", simpleIcon: "threedotjs" },
    ],
  },
  {
    title: "Databases",
    eyebrow: "storage",
    skills: [
      { name: "MySQL", simpleIcon: "mysql" },
      { name: "PostgreSQL", simpleIcon: "postgresql" },
      { name: "MongoDB", simpleIcon: "mongodb" },
      { name: "SQL", fallbackIcon: "database" },
      { name: "NoSQL", fallbackIcon: "database" },
    ],
  },
  {
    title: "Data & Messaging",
    eyebrow: "infra",
    skills: [
      { name: "Redis", simpleIcon: "redis" },
      { name: "Kafka", simpleIcon: "apachekafka" },
      { name: "Elasticsearch", simpleIcon: "elasticsearch" },
    ],
  },
  {
    title: "DevOps & Cloud",
    eyebrow: "infra",
    skills: [
      { name: "Docker", simpleIcon: "docker" },
      { name: "Kubernetes", simpleIcon: "kubernetes" },
      { name: "AWS", simpleIcon: "amazonwebservices" },
      { name: "Linux", simpleIcon: "linux" },
      { name: "CI/CD", fallbackIcon: "terminal" },
      { name: "GitHub Actions", simpleIcon: "githubactions" },
    ],
  },
  {
    title: "Tools",
    eyebrow: "workflow",
    skills: [
      { name: "Git", simpleIcon: "git" },
      { name: "GitHub", simpleIcon: "github" },
      { name: "Postman", simpleIcon: "postman" },
      { name: "IntelliJ IDEA", simpleIcon: "intellijidea" },
      { name: "VS Code", fallbackIcon: "code" },
    ],
  },
  {
    title: "Additional",
    eyebrow: "expanding",
    skills: [
      { name: "Node.js", simpleIcon: "nodedotjs" },
      { name: "Express.js", simpleIcon: "express" },
      { name: "Python", simpleIcon: "python" },
      { name: "Go", simpleIcon: "go" },
    ],
  },
];
