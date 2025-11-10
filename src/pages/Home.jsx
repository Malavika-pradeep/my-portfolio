import { Navbar } from "../components/Navbar";
// ThemeToggle removed to force single light theme
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { EducationExperience } from "../components/EducationExperience";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
  {/* Theme Toggle intentionally removed to keep site in light mode only */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
  <EducationExperience />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};