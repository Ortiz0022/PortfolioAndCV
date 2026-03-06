// ProjectDetailsDialog.tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/shared/types/project";
import { ExternalLink, Github } from "lucide-react";

function StarDeco({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

const TECH_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  React:         { bg: "rgba(6,182,212,0.1)",   text: "#0891b2", border: "rgba(6,182,212,0.3)" },
  TypeScript:    { bg: "rgba(59,130,246,0.1)",  text: "#3b82f6", border: "rgba(59,130,246,0.3)" },
  ".NET":        { bg: "rgba(147,51,234,0.1)",  text: "#9333ea", border: "rgba(147,51,234,0.3)" },
  "SQL Server":  { bg: "rgba(234,88,12,0.1)",   text: "#ea580c", border: "rgba(234,88,12,0.3)" },
  NestJS:        { bg: "rgba(239,68,68,0.1)",   text: "#ef4444", border: "rgba(239,68,68,0.3)" },
  MySQL:         { bg: "rgba(234,88,12,0.1)",   text: "#ea580c", border: "rgba(234,88,12,0.3)" },
  SignalR:       { bg: "rgba(16,185,129,0.1)",  text: "#10b981", border: "rgba(16,185,129,0.3)" },
  "ASP.NET Core":{ bg: "rgba(147,51,234,0.1)",  text: "#9333ea", border: "rgba(147,51,234,0.3)" },
  Git:           { bg: "rgba(239,68,68,0.1)",   text: "#ef4444", border: "rgba(239,68,68,0.3)" },
};
const TECH_DEFAULT = { bg: "rgba(200,144,46,0.1)", text: "#C8902E", border: "rgba(200,144,46,0.3)" };

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
}

function getPrimaryMedia(project: Project | null) {
  return project?.media?.[0] ?? null;
}

export default function ProjectDetailsDialog({ open, onOpenChange, project }: ProjectDetailsDialogProps) {
  const primaryMedia = getPrimaryMedia(project);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-[900px] overflow-y-auto rounded-3xl border p-0 shadow-2xl
        border-[#E6DFD0] bg-[#FBF8F1]/98 backdrop-blur-sm
        dark:border-[#232942] dark:bg-[#0d1117]/98"
        style={{ boxShadow: "0 24px 80px rgba(200,144,46,0.12), 0 0 0 1px rgba(200,144,46,0.15)" }}
      >
        {project && (
          <article className="flex flex-col">

            {/* ── Media principal ── */}
            <div className="relative overflow-hidden rounded-t-3xl">
              {primaryMedia ? (
                primaryMedia.kind === "image" ? (
                  <img
                    src={primaryMedia.src}
                    alt={primaryMedia.alt}
                    className="h-[240px] w-full object-cover md:h-[320px]"
                  />
                ) : (
                  <video
                    src={primaryMedia.src}
                    controls playsInline
                    className="h-[240px] w-full object-cover md:h-[320px]"
                  />
                )
              ) : (
                <div className="flex h-[240px] items-center justify-center bg-[#F5F0E3] dark:bg-[#111827] md:h-[320px]">
                  <StarDeco size={32} className="text-[#C8902E]/30 dark:text-[#E8C368]/20 animate-pulse" />
                </div>
              )}
              {/* Gradiente inferior sobre media */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FBF8F1] dark:from-[#0d1117] to-transparent" />
            </div>

            {/* ── Contenido ── */}
            <div className="px-6 pb-8 pt-2 md:px-8">

              {/* Separador estrellitas */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C8902E]/30 dark:to-[#E8C368]/20" />
                <StarDeco size={8} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse" />
                <StarDeco size={5} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.4s]" />
                <StarDeco size={8} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.8s]" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C8902E]/30 dark:to-[#E8C368]/20" />
              </div>

              <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">

                {/* ── Izquierda: título + descripción ── */}
                <div>
                  <DialogHeader className="space-y-3 text-left">
                    <DialogTitle
                      className="text-3xl font-black leading-tight text-[#1A1614] dark:text-[#E8E4DD] md:text-4xl"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </DialogTitle>
                    {project.shortDescription && (
                      <DialogDescription className="text-sm leading-relaxed text-[#3D2E1C] dark:text-[#D4CFC5] md:text-base">
                        {project.shortDescription}
                      </DialogDescription>
                    )}
                  </DialogHeader>
                </div>

                {/* ── Derecha: tecnologías + enlaces ── */}
                <div className="space-y-6">

                  {/* Tecnologías */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <StarDeco size={8} className="text-[#C8902E] dark:text-[#E8C368]" />
                      <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A6B5A] dark:text-[#8A8598]">
                        Tecnologías
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => {
                        const tc = TECH_COLORS[tech] ?? TECH_DEFAULT;
                        return (
                          <span
                            key={tech}
                            className="rounded-full px-3 py-1 text-xs font-semibold transition-transform duration-150 hover:scale-105"
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
                  </div>

                  {/* Enlaces */}
                  {project.links?.length ? (
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <StarDeco size={8} className="text-[#C8902E] dark:text-[#E8C368]" />
                        <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A6B5A] dark:text-[#8A8598]">
                          Enlaces
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link) => {
                          const isGithub = link.href.includes("github");
                          return (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                              style={{
                                background: "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E 55%, #92400e)",
                                boxShadow: "0 0 14px rgba(200,144,46,0.4)",
                              }}
                            >
                              {isGithub
                                ? <Github className="h-3.5 w-3.5" />
                                : <ExternalLink className="h-3.5 w-3.5" />
                              }
                              {link.label}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        )}
      </DialogContent>
    </Dialog>
  );
}