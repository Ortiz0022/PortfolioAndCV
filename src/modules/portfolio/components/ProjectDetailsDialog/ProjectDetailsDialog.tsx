import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/shared/types/project";

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

/**
 * Obtiene el primer recurso multimedia del proyecto.
 * Por ahora se utiliza como vista principal dentro del modal.
 */
function getPrimaryMedia(project: Project | null) {
  return project?.media?.[0] ?? null;
}

export default function ProjectDetailsDialog({
  open,
  onOpenChange,
  project,
}: ProjectDetailsDialogProps) {
  const primaryMedia = getPrimaryMedia(project);
  const title = project?.title ?? "Proyecto";
  const description = project?.shortDescription ?? "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-[1100px] overflow-y-auto rounded-3xl border border-white/10 bg-background/95 p-0 shadow-2xl backdrop-blur-sm">
        {project ? (
          <article className="flex flex-col">
            {/* 
              Sección multimedia principal:
              - Se muestra primero porque es el elemento visual dominante.
              - Puede renderizar una imagen o un video.
            */}
            <section
              className="border-b bg-muted/20 p-5 md:p-6"
              aria-label="Vista previa del proyecto"
            >
              {primaryMedia ? (
                <div className="overflow-hidden rounded-2xl">
                  {primaryMedia.kind === "image" ? (
                    <img
                      src={primaryMedia.src}
                      alt={primaryMedia.alt}
                      className="h-[260px] w-full object-cover md:h-[340px]"
                    />
                  ) : (
                    <video
                      src={primaryMedia.src}
                      controls
                      playsInline
                      className="h-[260px] w-full object-cover md:h-[340px]"
                    >
                      Tu navegador no soporta video HTML5.
                    </video>
                  )}
                </div>
              ) : (
                <div className="flex h-[260px] items-center justify-center rounded-2xl bg-muted md:h-[340px]">
                  <span>Sin vista previa disponible</span>
                </div>
              )}
            </section>

            {/* 
              Contenido descriptivo del proyecto:
              - En desktop se divide en dos columnas.
              - En móvil se apila verticalmente.
            */}
            <section className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.9fr] md:p-8">
              {/* 
                Columna izquierda:
                - Contiene el encabezado principal del proyecto.
                - Se prioriza la lectura del título y la descripción.
              */}
              <div>
                <DialogHeader className="space-y-4 text-left">
                  <DialogTitle className="max-w-[12ch] text-4xl font-bold leading-tight md:text-5xl">
                    {title}
                  </DialogTitle>

                  {description ? (
                    <DialogDescription className="max-w-[60ch] text-base leading-8 text-muted-foreground md:text-lg">
                      {description}
                    </DialogDescription>
                  ) : null}
                </DialogHeader>
              </div>

              {/* 
                Columna derecha:
                - Agrupa información complementaria:
                  tecnologías y enlaces.
              */}
              <div className="space-y-8">
                <section
                  className="space-y-3"
                  aria-labelledby="project-tech-title"
                >
                  <h3
                    id="project-tech-title"
                    className="text-lg font-semibold md:text-xl"
                  >
                    Tecnologías
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="techLight">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>

                {project.links?.length ? (
                  <section
                    className="space-y-3"
                    aria-labelledby="project-links-title"
                  >
                    <h3
                      id="project-links-title"
                      className="text-lg font-semibold md:text-xl"
                    >
                      Enlaces
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <Button
                          key={link.href}
                          variant="cosmicOutline"
                          size="sm"
                          asChild
                        >
                          <a href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>
            </section>
          </article>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}