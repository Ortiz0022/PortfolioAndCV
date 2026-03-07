import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import AboutMePanel from "./AboutMePanel";
import EducationPanel from "./EducationPanel";

export default function EducationSection() {
  return (
    <SectionLayout id="education">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-12 md:py-10 lg:px-10">
        <div className="mb-12 flex flex-col items-start gap-4 text-center">
          <div className="flex items-center gap-2 opacity-60">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-16 bg-gradient-to-r from-[#C8902E]/80 via-[#C8902E] to-[#C8902E]/80 dark:from-[#E8C368]/80 dark:via-[#E8C368] dark:to-[#E8C368]/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
          </div>

          <h2
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-tight text-[#1A1614] dark:text-[#E8E4DD]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Educación y sobre mí
          </h2>

          <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A6B5A] dark:text-[#8A8598]">
            Formación académica · Perfil profesional
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.18fr_0.92fr] lg:items-start">
          <AboutMePanel />
          <EducationPanel />
        </div>
      </div>
    </SectionLayout>
  );
}