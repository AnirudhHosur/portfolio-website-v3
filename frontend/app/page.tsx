"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { AboutSection } from "@/components/about";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillsSection } from "@/components/skills";
import { ProjectsSection } from "@/components/projects-display";
import { ContactSection } from "@/components/contact";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
}
