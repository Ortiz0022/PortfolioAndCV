// PortfolioSection.tsx
import { useMemo, useState } from "react";
import SectionLayout from "@/shared/components/layout/SectionLayout";
import { SECTION_IDS } from "@/shared/lib/sectionIds";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectDetailsDialog from "../ProjectDetailsDialog/ProjectDetailsDialog";
import { projects } from "../../data/projects";
import type { Project } from "@/shared/types/project";
import { Sparkles } from "lucide-react";

function StarDeco({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

export default function PortfolioSection() {
  const items = useMemo(() => projects, []);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const handleOpenDetails = (project: Project) => {
    setSelected(project);
    setOpen(true);
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setSelected(null);
  };

  return (
    <SectionLayout id={SECTION_IDS.portfolio}>
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12 md:py-24 lg:px-16">

        {/* ── Encabezado ── */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 opacity-60">
            <StarDeco size={4} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.3s]" />
            <StarDeco size={9} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse" />
            <StarDeco size={5} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.7s]" />
            <StarDeco size={7} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:1.1s]" />
            <StarDeco size={4} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.4s]" />
          </div>

          <h2
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-tight text-[#1A1614] dark:text-[#E8E4DD]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Portafolio
          </h2>

          <div className="flex items-center gap-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-16 bg-gradient-to-r from-[#C8902E]/80 via-[#C8902E] to-[#C8902E]/80 dark:from-[#E8C368]/80 dark:via-[#E8C368] dark:to-[#E8C368]/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A6B5A] dark:text-[#8A8598]">
            Proyectos desarrollados
          </p>
        </div>

        {/* ── Grid de proyectos ── */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 opacity-50">
            <Sparkles className="h-8 w-8 text-[#C8902E] dark:text-[#E8C368]" />
            <p className="text-sm font-mono text-[#7A6B5A] dark:text-[#8A8598]">Sin proyectos aún</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
            {items.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
                index={i}
              />
            ))}
          </div>
        )}

        {/* Decoración inferior */}
        <div className="mt-14 flex items-center justify-center gap-3 opacity-40">
          <StarDeco size={5} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8902E]/50 to-transparent dark:via-[#E8C368]/50" />
          <Sparkles className="h-4 w-4 text-[#C8902E] dark:text-[#E8C368]" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8902E]/50 to-transparent dark:via-[#E8C368]/50" />
          <StarDeco size={5} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.7s]" />
        </div>

        <ProjectDetailsDialog open={open} onOpenChange={handleOpenChange} project={selected} />
      </div>
    </SectionLayout>
  );
}