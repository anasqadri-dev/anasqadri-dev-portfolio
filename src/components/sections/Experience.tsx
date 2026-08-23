import { timeline } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="hairline">
      <div className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="// experience"
          title="Education & Teaching"
          description="Academic background and teaching experience — updated as new roles are added."
        />

        <ol className="mt-14 flex flex-col">
          {timeline.map((entry, i) => (
            <Reveal key={entry.title} delay={(i % 4) * 0.05} as="li">
              <div className="grid grid-cols-1 gap-2 border-t border-line/70 py-7 sm:grid-cols-[140px_1fr] sm:gap-8">
                <span className="font-mono text-xs text-text-muted">
                  {entry.period}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
                    {entry.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 text-[11px] text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <li className="border-t border-line/70" aria-hidden="true" />
        </ol>
      </div>
    </section>
  );
}
