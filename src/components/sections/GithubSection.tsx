import { Github, GitBranch, Code2, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const points = [
  {
    icon: Code2,
    title: "Public engineering work",
    description: "Full-stack projects built and documented in the open, from first commit onward.",
  },
  {
    icon: GitBranch,
    title: "Open source",
    description: "Contributing to external projects as an active part of the developer community.",
  },
  {
    icon: Users,
    title: "Continuous learning",
    description: "A public, ongoing practice — including a daily DSA problem-solving log.",
  },
];

export function GithubSection() {
  return (
    <section id="github" className="hairline">
      <div className="section-shell py-16 sm:py-20">
        <div className="glow-border relative overflow-hidden rounded-2xl bg-surface/40 p-10 sm:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-primary/10 blur-3xl" />

          <Reveal className="relative">
            <Github className="h-8 w-8 text-blue-bright" strokeWidth={1.5} />
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl text-balance">
              Most of my engineering lives on GitHub
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary">
              Source code, commit history, and project documentation — the
              clearest record of how I build.
            </p>
          </Reveal>

          <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.06}>
                <point.icon className="h-5 w-5 text-blue-bright" strokeWidth={1.5} />
                <h3 className="mt-3 text-sm font-medium text-text-primary">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="relative mt-10">
            <Button
              href="https://github.com/anasqadri-dev"
              variant="primary"
              external
              icon={<Github className="h-4 w-4" />}
            >
              github.com/anasqadri-dev
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
