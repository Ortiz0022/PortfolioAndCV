import SectionLayout from "@/shared/components/layout/SectionLayout";
import { SECTION_IDS } from "@/shared/lib/sectionIds";
import SolarHero from "./SolarHero";

export default function HeroSection() {
  return (
    <SectionLayout id={SECTION_IDS.hero} className="overflow-hidden py-0">
      <SolarHero />
    </SectionLayout>
  );
}