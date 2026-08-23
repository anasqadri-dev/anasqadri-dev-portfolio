import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className,
  external,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-blue-primary text-white hover:bg-blue-bright shadow-[0_0_0_1px_rgba(59,130,246,0.3)] hover:shadow-[0_0_24px_-4px_rgba(59,130,246,0.55)]",
    secondary:
      "border border-line bg-surface/40 text-text-primary hover:border-blue-bright/50 hover:bg-surface",
    ghost: "text-text-secondary hover:text-text-primary",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
      {icon}
    </Link>
  );
}
