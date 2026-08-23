import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechChip } from "@/components/ui/TechChip";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="hairline">
      <div className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="// skills"
          title="Technology ecosystem"
          description="Grouped by where each tool sits in the stack — not a claim of equal depth across all of them."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.06}>
              <div className="glow-border h-full rounded-xl bg-surface/40 p-6">
                <div className="mb-5 flex items-baseline justify-between">
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {group.title}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    {group.eyebrow}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <TechChip key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
