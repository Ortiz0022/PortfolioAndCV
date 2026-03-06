import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project, ProjectMedia } from "@/shared/types/project";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

/**
 * Obtiene el media principal del proyecto.
 * Por ahora usamos el primer elemento del arreglo como preview.
 */
function getPreviewMedia(media?: ProjectMedia[]) {
  return media?.[0];
}

export default function ProjectCard({
  project,
  onOpenDetails,
}: ProjectCardProps) {
  const previewMedia = getPreviewMedia(project.media);

  return (
   <Card
    className="group relative h-[420px] cursor-pointer overflow-hidden rounded-2xl border-0"
    onClick={() => onOpenDetails(project)}
    >
        {/* MEDIA */}
        <div className="absolute inset-0">
            {previewMedia?.kind === "video" ? (
            <video
                src={previewMedia.src}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            ) : (
            <img
                src={previewMedia?.src}
                alt={previewMedia?.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            )}
        </div>

        {/* OVERLAY FULL */}
        <div className="absolute inset-0 flex flex-col justify-end p-6
                        bg-black/40 backdrop-blur-sm
                        transition-all duration-300
                        group-hover:bg-black/65">

            {/* CONTENIDO */}
            <div className="space-y-3 text-white">
            <h3 className="text-3xl font-bold">{project.title}</h3>

            <p className="text-white/90">
                {project.shortDescription}
            </p>
            <div className="flex flex-items between gap-24">
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                <Badge
                    key={tech}
                    variant="tech"
                >
                    {tech}
                </Badge>
                ))}
            </div>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="mt-2"
                    onClick={(e) => {
                    e.stopPropagation();
                    onOpenDetails(project);
                    }}
                >
                    Ver más
                </Button>
            </div>
            </div>
        </div>
    </Card>
  );
}