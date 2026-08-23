import { ArrowUp, Mail } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/social-links";
import { TechIcon } from "@/components/ui/TechIcon";

const footerIconOrder: Array<{ icon: string; slug: string }> = [
  { icon: "github", slug: "github" },
  { icon: "linkedin", slug: "linkedin" },
  { icon: "twitter", slug: "x" },
  { icon: "linktree", slug: "linktree" },
];

export function Footer() {
  const email = socialLinks.find((s) => s.icon === "mail");

  return (
    <footer className="hairline">
      <div className="section-shell flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-text-secondary">
          © 2026 {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {footerIconOrder.map(({ icon, slug }) => {
            const link = socialLinks.find((s) => s.icon === icon);
            if (!link) return null;
            return (
              <a
                key={icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-text-secondary transition-colors hover:text-blue-bright"
              >
                <TechIcon simpleIcon={slug} className="h-4 w-4" />
              </a>
            );
          })}
          {email && (
            <a
              href={email.href}
              aria-label="Email"
              className="text-text-secondary transition-colors hover:text-blue-bright"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
            </a>
          )}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-blue-bright"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
