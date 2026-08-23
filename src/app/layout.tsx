import type { Metadata } from "next";
import { displayFont, bodyFont, monoFont } from "@/lib/fonts";
import { siteConfig } from "@/data/site-config";
import { socialLinks } from "@/data/social-links";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "profile",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.metaDescription,
    siteName: `${siteConfig.name} — Portfolio`,
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.metaDescription,
    images: ["/images/og-image.svg"],
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const githubLink = socialLinks.find((s) => s.icon === "github")?.href;
  const linkedinLink = socialLinks.find((s) => s.icon === "linkedin")?.href;
  const twitterLink = socialLinks.find((s) => s.icon === "twitter")?.href;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        jobTitle: siteConfig.title,
        url: siteConfig.url,
        email: `mailto:${siteConfig.email}`,
        sameAs: [githubLink, linkedinLink, twitterLink].filter(Boolean),
        knowsAbout: [
          "Java",
          "Spring Boot",
          "Backend Engineering",
          "REST APIs",
          "System Design",
          "Cloud Infrastructure",
          "DevOps",
          "Open Source Software",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profile`,
        url: siteConfig.url,
        name: `${siteConfig.name} | ${siteConfig.title}`,
        about: { "@id": `${siteConfig.url}/#person` },
        description: siteConfig.metaDescription,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} — Portfolio`,
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-bg text-text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-blue-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
