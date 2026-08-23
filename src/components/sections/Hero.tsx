import { ArrowRight, Github, Linkedin, FileDown } from "lucide-react";
import { siteConfig, resumePath } from "@/data/site-config";
import { socialLinks } from "@/data/social-links";
import { Button } from "@/components/ui/Button";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { HeroBackground } from "@/components/three/HeroBackground";

export function Hero() {
  const github = socialLinks.find((s) => s.icon === "github");
  const linkedin = socialLinks.find((s) => s.icon === "linkedin");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <HeroBackground />
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:56px_56px] opacity-[0.15]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent" />

      <div className="section-shell relative grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="animate-fade-up">
          <p className="eyebrow mb-6">{"// software-engineer"}</p>

          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl text-balance">
            Muhammad Anas Qadri
          </h1>

          <p className="mt-4 font-mono text-sm text-blue-bright sm:text-base">
            {siteConfig.role}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            {siteConfig.heroStatement}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Get In Touch
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-text-secondary transition-colors hover:text-blue-bright"
              >
                <Github className="h-5 w-5" strokeWidth={1.5} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-text-secondary transition-colors hover:text-blue-bright"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
            )}
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-blue-bright"
            >
              <FileDown className="h-4 w-4" strokeWidth={1.5} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}
