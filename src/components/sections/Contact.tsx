import { Mail, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { socialLinks, type SocialLink } from "@/data/social-links";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TechIcon } from "@/components/ui/TechIcon";

// Maps each social-links `icon` key to a real simple-icons brand slug.
// "x" is the current brand mark for what used to be Twitter.
const brandSlug: Record<SocialLink["icon"], string | undefined> = {
  github: "github",
  linkedin: "linkedin",
  twitter: "x",
  youtube: "youtube",
  instagram: "instagram",
  threads: "threads",
  gravatar: "gravatar",
  linktree: "linktree",
  whatsapp: "whatsapp",
  discord: "discord",
  mail: undefined,
};

export function Contact() {
  const contactLinks = socialLinks.filter((s) => s.showInContact);

  return (
    <section id="contact" className="hairline">
      <div className="section-shell py-16 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{"// contact"}</span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-5xl text-balance">
            Let&apos;s build something great.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary">
            Open to backend engineering roles, collaboration, and interesting
            problems. The fastest way to reach me is email.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="primary"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              {siteConfig.email}
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {contactLinks.map((link) => {
              const slug = brandSlug[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.icon === "mail" ? undefined : "_blank"}
                  rel={link.icon === "mail" ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-blue-bright"
                >
                  {slug ? (
                    <TechIcon simpleIcon={slug} className="h-4 w-4" />
                  ) : (
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
