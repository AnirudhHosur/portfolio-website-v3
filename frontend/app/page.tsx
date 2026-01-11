"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { ExperienceSection } from "@/components/experience";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects";
import { ContactSection } from "@/components/contact";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
}
