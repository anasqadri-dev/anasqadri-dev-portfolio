// Central place for every outbound social / contact link.
// Add or edit a platform here and it updates everywhere on the site.
// Update the placeholder hrefs below (instagram/threads/linktree/gravatar)
// to your real handles.

export type SocialLink = {
  label: string;
  href: string;
  icon:
    | "github"
    | "linkedin"
    | "twitter"
    | "youtube"
    | "instagram"
    | "threads"
    | "gravatar"
    | "linktree"
    | "whatsapp"
    | "discord"
    | "mail";
  // Shown in the contact section; set false to keep the link available
  // elsewhere (e.g. footer, linktree hub) without crowding the contact grid.
  showInContact?: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/anasqadri-dev",
    icon: "github",
    showInContact: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/anasqadri-dev",
    icon: "linkedin",
    showInContact: true,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/anasqadri_dev",
    icon: "twitter",
    showInContact: true,
  },
  {
    label: "Email",
    href: "mailto:anasqadri.dev@outlook.com",
    icon: "mail",
    showInContact: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923213597730",
    icon: "whatsapp",
    showInContact: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/anasqadri.dev",
    icon: "instagram",
    showInContact: true,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@anasqadri-dev",
    icon: "youtube",
    showInContact: true,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/anasqadri.dev",
    icon: "discord",
    showInContact: true,
  },
  {
    label: "Threads",
    href: "https://threads.net/@anasqadri.dev",
    icon: "threads",
    showInContact: true,
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/anasqadri.dev",
    icon: "linktree",
    showInContact: true,
  },
  {
    label: "Gravatar",
    href: "https://gravatar.com/anasqadridev",
    icon: "gravatar",
    showInContact: true,
  },
];
