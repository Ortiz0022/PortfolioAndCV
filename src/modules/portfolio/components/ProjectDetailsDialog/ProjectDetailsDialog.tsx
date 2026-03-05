import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Project } from "@/shared/types/project";

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

export default function ProjectDetailsDialog({
  open,
  onOpenChange,
  project,
}: ProjectDetailsDialogProps) {
  // Si no hay proyecto seleccionado, igual dejamos el Dialog montado
  // para evitar renders raros (buena práctica).
  const title = project?.title ?? "Proyecto";
  const description = project?.shortDescription ?? "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>

        {project ? (
          <div>
            <p>
              <strong>Tecnologías:</strong> {project.technologies.join(", ")}
            </p>

            {project.links?.length ? (
              <div>
                <p>
                  <strong>Links:</strong>
                </p>
                <ul>
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.media?.length ? (
              <div>
                <p>
                  <strong>Media:</strong>
                </p>
                <ul>
                  {project.media.map((m, idx) => (
                    <li key={`${m.kind}-${idx}`}>
                      {m.kind === "image" ? (
                        <span>Imagen: {m.alt}</span>
                      ) : (
                        <span>Video: {m.title ?? m.src}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}