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
    if (!next) setSelected(null);
  };

  return (
    <SectionLayout id={SECTION_IDS.portfolio}>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Portafolio</h2>
          <p className="mt-2 text-muted-foreground">
            Algunos proyectos que he desarrollado.
          </p>
        </div>

        {items.length === 0 ? (
          <p>(Sin proyectos todavía)</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {items.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={handleOpenDetails}
              />
            ))}
          </div>
        )}

        <ProjectDetailsDialog
          open={open}
          onOpenChange={handleOpenChange}
          project={selected}
        />
      </div>
    </SectionLayout>
  );
}