import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "reveal-up flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-text-secondary",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
