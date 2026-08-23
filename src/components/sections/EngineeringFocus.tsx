import { engineeringFocus } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function EngineeringFocus() {
  return (
    <section id="engineering-focus" className="hairline">
      <div className="section-shell py-16 sm:py-20">
        <SectionHeading eyebrow="// engineering-focus" title="What I work on" />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {engineeringFocus.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="h-full bg-bg p-7 transition-colors hover:bg-surface/50">
                <h3 className="font-display text-base font-semibold text-text-primary">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
