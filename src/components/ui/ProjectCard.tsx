import { Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={
        "glow-border group flex h-full flex-col justify-between rounded-xl bg-surface/40 p-7 " +
        (featured ? "" : "")
      }
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            {project.name}
          </h3>
          <div className="flex shrink-0 items-center gap-3 pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="text-text-secondary transition-colors hover:text-blue-bright"
            >
              <Github className="h-4 w-4" strokeWidth={1.5} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="text-text-secondary transition-colors hover:text-blue-bright"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <p className="mt-4 font-mono text-xs leading-relaxed text-text-muted">
          {project.focus}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-line/70 pt-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-2.5 py-1 text-[11px] text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
