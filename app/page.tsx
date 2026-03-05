import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import JsonLd from "@/components/JsonLd";
import { generatePersonSchema } from "@/lib/seo-config";
import CursorEffect from "@/components/CursorEffect";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <TooltipProvider>
      <Toaster />
      <JsonLd schemas={[generatePersonSchema()]} />
      <main className="bg-background min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
        <CursorEffect />
      </main>
    </TooltipProvider>
  );
}
