import { TechIcon } from "./TechIcon";
import type { Skill } from "@/data/skills";

export function TechChip({ name, simpleIcon, fallbackIcon }: Skill) {
  return (
    <div className="glow-border flex items-center gap-2.5 rounded-md bg-surface/60 px-3.5 py-2.5">
      <TechIcon
        simpleIcon={simpleIcon}
        fallbackIcon={fallbackIcon}
        className="h-4 w-4 shrink-0 text-blue-bright"
      />
      <span className="text-sm text-text-secondary">{name}</span>
    </div>
  );
}
