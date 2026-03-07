import type { Project, ProjectMedia } from "@/shared/types/project";
import { ExternalLink } from "lucide-react";
import { StarDeco } from "./StarDeco";

/**
 * Acentos sutiles por tarjeta.
 *
 * Se usan para:
 * - borde
 * - glow
 * - numeración
 * - botón "Ver más"
 *
 * Se mantienen fríos y modernos para evitar el look recargado.
 */
const CARD_ACCENTS = [
  {
    border: "rgba(125, 138, 255, 0.26)",
    glow: "rgba(125, 138, 255, 0.16)",
    num: "#8b95ff",
    buttonBg: "rgba(125, 138, 255, 0.18)",
    buttonBorder: "rgba(125, 138, 255, 0.34)",
    buttonText: "#5b63e6",
  },
  {
    border: "rgba(79, 209, 197, 0.24)",
    glow: "rgba(79, 209, 197, 0.14)",
    num: "#58d8cb",
    buttonBg: "rgba(79, 209, 197, 0.18)",
    buttonBorder: "rgba(79, 209, 197, 0.34)",
    buttonText: "#0f8f84",
  },
  {
    border: "rgba(167, 139, 250, 0.24)",
    glow: "rgba(167, 139, 250, 0.14)",
    num: "#b39cff",
    buttonBg: "rgba(167, 139, 250, 0.18)",
    buttonBorder: "rgba(167, 139, 250, 0.34)",
    buttonText: "#6f5ae6",
  },
];

function getPreviewMedia(media?: ProjectMedia[]) {
  return media?.[0];
}

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
  index?: number;
}

/**
 * Card moderna de proyecto.
 *
 * Comportamiento:
 * - Estado base: título, tecnologías y CTA visibles.
 * - Hover: aparece la descripción.
 * - El overlay cubre toda la tarjeta para que no parezca una caja dentro de otra.
 */
export default function ProjectCard({
  project,
  onOpenDetails,
  index = 0,
}: ProjectCardProps) {
  const previewMedia = getPreviewMedia(project.media);
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];

  return (
    <article
      className="group relative flex h-[430px] cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border bg-card/20 transition-all duration-500 hover:-translate-y-1"
      style={{
        borderColor: accent.border,
        boxShadow: `0 10px 32px ${accent.glow}`,
      }}
      onClick={() => onOpenDetails(project)}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          `0 20px 50px ${accent.glow.replace(/[\d.]+\)$/, "0.28)")}`;
        (e.currentTarget as HTMLElement).style.borderColor =
          accent.border.replace(/[\d.]+\)$/, "0.48)");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 10px 32px ${accent.glow}`;
        (e.currentTarget as HTMLElement).style.borderColor = accent.border;
      }}
    >
      {/* Preview principal */}
      <div className="absolute inset-0">
          <img
            src={previewMedia?.src}
            alt={previewMedia?.kind ?? project.title}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          />

        {/* Overlay que cubre TODO el card */}
        <div className="absolute inset-0 bg-white/18 backdrop-blur-[2px] dark:bg-black/34 dark:backdrop-blur-[3px]" />

        {/* Gradiente principal de lectura */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-white/10 to-transparent dark:from-black/72 dark:via-black/26 dark:to-transparent" />

        {/* Gradiente más fuerte al fondo para contenido */}
        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-white/82 via-white/46 to-transparent dark:from-black/86 dark:via-black/50 dark:to-transparent transition-all duration-500 group-hover:from-white/88 group-hover:via-white/54 dark:group-hover:from-black/90 dark:group-hover:via-black/58" />
      </div>

      {/* Número decorativo */}
      <div className="absolute right-5 top-5 z-10">
        <span
          className="font-mono text-sm font-semibold opacity-90"
          style={{ color: accent.num }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Estrella decorativa */}
      <div className="absolute left-5 top-5 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <StarDeco size={9} className="animate-pulse" color={accent.num} />
      </div>

      {/* Contenido visible sobre todo el card */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <div className="flex min-h-[170px] flex-col justify-end">
          {/* Título */}
          <h3 className="max-w-[85%] text-[1.1rem] text-[#201e1b] font-semibold leading-tight dark:text-[#fcf0e1] md:text-[1.25rem]">
            {project.title}
          </h3>

          {/* Descripción: solo hover */}
          <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 translate-y-2 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="mt-3 max-w-[92%] text-sm leading-relaxed text-[#2F2F2F]/88 dark:text-white/80">
              {project.shortDescription}
            </p>
          </div>

          {/* Footer del card */}
          <div className="mt-4 flex items-end justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                key={tech}
                className="rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide text-[#1F1F1F] dark:text-white/90"
                style={{
                  background: "#fff1f194",
                  borderColor: "rgba(0,0,0,0.10)",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {tech}
              </span>
              ))}
              {project.technologies.length > 3 && (
              <span
                className="rounded-full border px-2.5 py-1 text-[10px] font-medium text-[#2B2B2B] dark:text-white/75"
                style={{
                  background: "rgba(255,255,255,0.54)",
                  borderColor: "rgba(0,0,0,0.10)",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                  backdropFilter: "blur(6px)",
                }}
              >
                +{project.technologies.length - 3}
              </span>
              )}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetails(project);
              }}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: accent.buttonBg,
                borderColor: accent.buttonBorder,
                color: accent.buttonText,
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                backdropFilter: "blur(6px)",
              }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Ver más
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}