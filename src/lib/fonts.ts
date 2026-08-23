import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

// Display face — a geometric, technical sans used with restraint for
// headings. Pairs with Inter's neutrality for body copy and JetBrains Mono
// for terminal-style labels, keeping the whole site in one "engineer's
// toolkit" typographic family.
export const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
