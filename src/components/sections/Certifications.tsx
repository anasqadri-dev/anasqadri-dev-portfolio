import { ArrowUpRight, Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="hairline">
      <div className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="// certifications"
          title="Certifications"
          description="Coursework completed through Coursera, from Google, NVIDIA, Microsoft, and IBM."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {certifications.map((cert, i) => {
            const card = (
              <div className="glow-border group flex h-full flex-col justify-between rounded-xl bg-surface/40 p-6 transition-colors">
                <div>
                  <div className="flex items-center justify-between">
                    <TechIcon
                      simpleIcon={cert.issuerIcon}
                      fallbackIcon="award"
                      className="h-6 w-6 text-blue-bright"
                    />
                    {cert.credentialUrl && (
                      <ArrowUpRight
                        className="h-4 w-4 text-text-muted transition-colors group-hover:text-blue-bright"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-text-primary">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {cert.issuer}
                    {cert.platform && ` · ${cert.platform}`}
                  </p>
                </div>
                {cert.date && (
                  <p className="mt-4 font-mono text-xs text-text-muted">
                    {cert.date}
                  </p>
                )}
              </div>
            );

            return (
              <Reveal key={cert.name} delay={(i % 3) * 0.06}>
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
