import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { OpenSource } from "@/components/sections/OpenSource";
import { Blogs } from "@/components/sections/Blogs";
import { EngineeringFocus } from "@/components/sections/EngineeringFocus";
import { Experience } from "@/components/sections/Experience";
import { GithubSection } from "@/components/sections/GithubSection";
import { Contact } from "@/components/sections/Contact";
import { Certifications } from "@/components/sections/Certifications";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Blogs />
        <EngineeringFocus />
        <Experience />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
