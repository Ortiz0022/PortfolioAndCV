import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog.tsx";
import type { Project } from "@/shared/types/project";
import { ExternalLink, Github } from "lucide-react";

function StarDeco({
  size = 10,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

const TECH_COLORS: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  React: {
    bg: "rgba(6,182,212,0.10)",
    text: "#0891b2",
    border: "rgba(6,182,212,0.22)",
  },
  TypeScript: {
    bg: "rgba(59,130,246,0.10)",
    text: "#3b82f6",
    border: "rgba(59,130,246,0.22)",
  },
  ".NET": {
    bg: "rgba(147,51,234,0.10)",
    text: "#9333ea",
    border: "rgba(147,51,234,0.22)",
  },
  "SQL Server": {
    bg: "rgba(234,88,12,0.10)",
    text: "#ea580c",
    border: "rgba(234,88,12,0.22)",
  },
  NestJS: {
    bg: "rgba(239,68,68,0.10)",
    text: "#ef4444",
    border: "rgba(239,68,68,0.22)",
  },
  MySQL: {
    bg: "rgba(249,115,22,0.10)",
    text: "#f97316",
    border: "rgba(249,115,22,0.22)",
  },
  SignalR: {
    bg: "rgba(16,185,129,0.10)",
    text: "#10b981",
    border: "rgba(16,185,129,0.22)",
  },
  "ASP.NET Core": {
    bg: "rgba(147,51,234,0.10)",
    text: "#9333ea",
    border: "rgba(147,51,234,0.22)",
  },
  Git: {
    bg: "rgba(239,68,68,0.10)",
    text: "#ef4444",
    border: "rgba(239,68,68,0.22)",
  },
};

const TECH_DEFAULT = {
  bg: "rgba(125,138,255,0.10)",
  text: "#6b72f6",
  border: "rgba(125,138,255,0.20)",
};

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

function getPrimaryMedia(project: Project | null) {
  return project?.media?.[0] ?? null;
}

/**
 * Dialog de detalle del proyecto.
 *
 * Criterios de diseño:
 * - misma línea visual de las cards del portafolio
 * - superficie limpia y moderna
 * - media principal contenida para evitar recortes agresivos
 * - pills y botones más neutros, sin dorado fuerte
 */
export default function ProjectDetailsDialog({
  open,
  onOpenChange,
  project,
}: ProjectDetailsDialogProps) {
  const primaryMedia = getPrimaryMedia(project);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-h-[90vh] max-w-[1120px] overflow-y-auto rounded-[1.75rem] border p-0
          border-border bg-background/95 backdrop-blur-xl
          shadow-2xl
        "
        style={{
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(125,138,255,0.08)",
        }}
      >
        {project ? (
          <article className="grid gap-0 lg:grid-cols-[1.2fr_0.95fr]">
            {/* Media principal */}
            <section className="border-b border-border p-5 lg:border-b-0 lg:border-r lg:p-6">
              <div className="overflow-hidden rounded-[1.35rem] border border-border bg-card/60 backdrop-blur-sm">
                {primaryMedia ? (
                  primaryMedia.kind === "image" ? (
                    <div className="flex min-h-[260px] items-center justify-center p-4 md:min-h-[380px] md:p-5">
                      <img
                        src={primaryMedia.src}
                        alt={primaryMedia.alt}
                        className="max-h-[520px] w-full rounded-[1rem] object-contain"
                      />
                    </div>
                  ) : (
                    <div className="p-4 md:p-5">
                      <video
                        src={primaryMedia.src}
                        controls
                        playsInline
                        className="max-h-[520px] w-full rounded-[1rem] bg-black object-contain"
                      />
                    </div>
                  )
                ) : (
                  <div className="flex min-h-[280px] items-center justify-center">
                    <StarDeco
                      className="text-primary/30 dark:text-primary/20"
                      size={32}
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Contenido */}
            <section className="px-6 pb-8 pt-6 md:px-8 md:pt-7">
              <div className="space-y-8">
                {/* Encabezado */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 opacity-70">
                    <StarDeco size={6} className="text-primary" />
                    <span className="h-px w-10 bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>

                  <DialogHeader className="space-y-4 text-left">
                    <DialogTitle
                      className="text-3xl font-semibold leading-[1.02] text-foreground md:text-[2.7rem]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </DialogTitle>

                    {project.shortDescription ? (
                      <DialogDescription className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {project.shortDescription}
                      </DialogDescription>
                    ) : null}
                  </DialogHeader>
                </div>

                {/* Tecnologías */}
                <section className="space-y-3">
                  <div className="flex items-center gap-2">
                    <StarDeco size={7} className="text-primary" />
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Tecnologías
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => {
                      const tc = TECH_COLORS[tech] ?? TECH_DEFAULT;

                      return (
                        <span
                          key={tech}
                          className="rounded-full px-3 py-1 text-xs font-medium transition-transform duration-150 hover:scale-[1.03]"
                          style={{
                            background: tc.bg,
                            color: tc.text,
                            border: `1px solid ${tc.border}`,
                          }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </section>

                {/* Enlaces */}
                {project.links?.length ? (
                  <section className="space-y-3">
                    <div className="flex items-center gap-2">
                      <StarDeco size={7} className="text-primary" />
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        Enlaces
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => {
                        const isGithub = link.href.includes("github");

                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              inline-flex items-center gap-2 rounded-full border px-4 py-2
                              text-xs font-semibold transition-all duration-200
                              hover:-translate-y-0.5 hover:bg-card
                            "
                            style={{
                              borderColor: "rgba(125,138,255,0.20)",
                              background: "rgba(125,138,255,0.08)",
                              color: "var(--foreground)",
                            }}
                          >
                            {isGithub ? (
                              <Github className="h-3.5 w-3.5" />
                            ) : (
                              <ExternalLink className="h-3.5 w-3.5" />
                            )}
                            {link.label}
                          </a>
                        );
                      })}
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