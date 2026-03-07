import HeroSection from "./components/Hero/HeroSection";
import EducationSection from "./components/Education/EducationSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import SkillsSection from "./components/Skills/SkillsSection";
import LanguagesSection from "./components/Languages/LanguagesSection";
import ContactSection from "./components/Contact/ContactSection";

import PortfolioSection from "../portfolio/components/Portfolio/PortfolioSection";
import ThemeToggle from "@/shared/components/ThemeToggle";

export default function CvPage() {
  return (
    <>
      <ThemeToggle />
      <HeroSection />
      <EducationSection />
      <SkillsSection />
      <LanguagesSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}