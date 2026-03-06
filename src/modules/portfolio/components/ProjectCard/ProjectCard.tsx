// ProjectCard.tsx
import type { Project, ProjectMedia } from "@/shared/types/project";
import { ExternalLink } from "lucide-react";

function StarDeco({ size = 10, className = "", color }: { size?: number; className?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color ?? "currentColor"} className={className}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

// Acento dorado por índice — sutil variación tonal
const CARD_ACCENTS = [
  { border: "rgba(200,144,46,0.3)",  glow: "rgba(200,144,46,0.25)", num: "#C8902E" },
  { border: "rgba(99,102,241,0.28)", glow: "rgba(99,102,241,0.2)",  num: "#818cf8" },
  { border: "rgba(20,184,166,0.28)", glow: "rgba(20,184,166,0.2)",  num: "#2dd4bf" },
];

function getPreviewMedia(media?: ProjectMedia[]) {
  return media?.[0];
}

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index?: number;
}

export default function ProjectCard({ project, onOpenDetails, index = 0 }: ProjectCardProps) {
  const previewMedia = getPreviewMedia(project.media);
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

  return (
    <div
      className="group relative flex h-[400px] cursor-pointer flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1"
      style={{
        borderColor: accent.border,
        boxShadow: `0 4px 20px ${accent.glow}`,
      }}
      onClick={() => onOpenDetails(project)}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${accent.glow.replace(/[\d.]+\)$/, "0.45)")}`;
        (e.currentTarget as HTMLElement).style.borderColor = accent.border.replace(/[\d.]+\)$/, "0.6)");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${accent.glow}`;
        (e.currentTarget as HTMLElement).style.borderColor = accent.border;
      }}
    >
      {/* ── Imagen / Video ── */}
      <div className="absolute inset-0">
        {previewMedia?.kind === "video" ? (
          <video
            src={previewMedia.src}
            autoPlay loop muted playsInline
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <img
            src={previewMedia?.src}
            alt={previewMedia?.alt ?? project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Gradiente oscuro sobre imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* ── Número índice decorativo ── */}
      <div className="absolute right-4 top-4 z-10">
        <span
          className="font-mono text-xs font-bold opacity-80"
          style={{ color: accent.num }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* ── Estrellita decorativa top-left ── */}
      <div className="absolute left-4 top-4 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <StarDeco size={10} className="animate-pulse" color={accent.num} />      
        </div>

      {/* ── Contenido inferior ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
        {/* Título */}
        <h3
          className="mb-2 text-xl font-black leading-tight text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>

        {/* Descripción — aparece en hover */}
        <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-white/75 transition-all duration-300 group-hover:text-white/90">
          {project.shortDescription}
        </p>

        {/* Tech badges + botón */}
        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90"
                style={{
                  background: `${accent.glow.replace(/[\d.]+\)$/, "0.4)")}`,
                  border: `1px solid ${accent.border.replace(/[\d.]+\)$/, "0.5)")}`,
                  backdropFilter: "blur(4px)",
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white/60"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Botón ver más */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpenDetails(project); }}
            className="flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${accent.num}cc, ${accent.num})`,
              boxShadow: `0 0 12px ${accent.glow}`,
            }}
          >
            <ExternalLink className="h-3 w-3" />
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}