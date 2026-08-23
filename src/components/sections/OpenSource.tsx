import { ArrowUpRight } from "lucide-react";
import { openSource } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { OpenSourceStats } from "@/components/ui/OpenSourceStats";

export function OpenSource() {
  return (
    <section id="open-source" className="hairline">
      <div className="section-shell py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.5fr_0.5fr] lg:items-center">
          <Reveal>
            <span className="eyebrow">{openSource.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl text-balance">
              {openSource.heading}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-secondary">
              {openSource.description}
            </p>
            <Button
              href={openSource.ctaUrl}
              variant="secondary"
              external
              icon={<ArrowUpRight className="h-4 w-4" />}
              className="mt-8"
            >
              {openSource.ctaLabel}
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <OpenSourceStats />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
