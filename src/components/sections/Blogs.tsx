import { ArrowUpRight, PenLine } from "lucide-react";
import { blogPlatforms } from "@/data/blogs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal } from "@/components/ui/Reveal";

export function Blogs() {
  return (
    <section id="blog" className="hairline">
      <div className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="// writing"
          title="Blog"
          description="Notes on backend engineering, projects, and what I'm learning — cross-posted across a few platforms."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {blogPlatforms.map((platform, i) => (
            <Reveal key={platform.name} delay={i * 0.06}>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border group flex h-full flex-col justify-between rounded-xl bg-surface/40 p-6 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <TechIcon
                      simpleIcon={platform.simpleIcon}
                      className="h-6 w-6 text-blue-bright"
                    />
                    <ArrowUpRight
                      className="h-4 w-4 text-text-muted transition-colors group-hover:text-blue-bright"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
                    {platform.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {platform.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-6 flex items-center gap-2 font-mono text-xs text-text-muted">
          <PenLine className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>New posts appear on all three platforms as they&apos;re published.</span>
        </Reveal>
      </div>
    </section>
  );
}
