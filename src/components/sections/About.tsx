import { siteConfig } from "@/data/site-config";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr]">
        <Reveal>
          <span className="eyebrow">{"// about"}</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Engineering from the backend outward
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-text-secondary text-balance">
            {siteConfig.about}
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-text-muted">
            <span>Based in {siteConfig.location}</span>
            <span className="hidden sm:inline">·</span>
            <span>Backend-first, full-stack capable</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
