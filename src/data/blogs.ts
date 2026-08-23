// Blog / writing platform links.
// Update hrefs to your real profile URLs on each platform.

export type BlogPlatform = {
  name: string;
  href: string;
  description: string;
  simpleIcon: string;
};

export const blogPlatforms: BlogPlatform[] = [
  {
    name: "Hashnode",
    href: "https://hashnode.com/@anasqadri-dev",
    description: "Long-form technical writing on backend engineering and system design.",
    simpleIcon: "hashnode",
  },
  {
    name: "Dev.to",
    href: "https://dev.to/anasqadri-dev",
    description: "Shorter posts, project write-ups, and community discussion.",
    simpleIcon: "devdotto",
  },
  {
    name: "Medium",
    href: "https://medium.com/@anasqadri.dev",
    description: "Reflections on the learning journey and career-focused writing.",
    simpleIcon: "medium",
  },
];
