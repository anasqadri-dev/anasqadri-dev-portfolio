import { Github } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="hairline">
      <div className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="// projects"
          title="Featured work"
          description="Full-stack systems built end to end — backend architecture, integration protocols, and the interfaces on top of them."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        {other.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {other.map((project) => (
              <Reveal key={project.name}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-12 flex justify-center">
          <Button
            href="https://github.com/anasqadri-dev"
            variant="secondary"
            external
            icon={<Github className="h-4 w-4" />}
          >
            View All Projects on GitHub
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
