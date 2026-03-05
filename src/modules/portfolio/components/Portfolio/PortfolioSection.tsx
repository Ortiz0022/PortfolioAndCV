import { useMemo, useState } from "react";

import SectionLayout from "@/shared/components/layout/SectionLayout";
import { SECTION_IDS } from "@/shared/lib/sectionIds";

import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectDetailsDialog from "../ProjectDetailsDialog/ProjectDetailsDialog";
import { projects } from "../../data/projects";
import type { Project } from "@/shared/types/project";

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
    if (!next) {
      setSelected(null);
    }
  };

  return (
    <SectionLayout id={SECTION_IDS.portfolio}>
      <div>
        <h2>Portafolio</h2>

        {items.length === 0 ? (
          <p>(Sin proyectos todavía)</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <ProjectCard key={p.id} project={p} onOpenDetails={handleOpenDetails} />
            ))}
          </div>
        )}

        <ProjectDetailsDialog open={open} onOpenChange={handleOpenChange} project={selected} />
      </div>
    </SectionLayout>
  );
}