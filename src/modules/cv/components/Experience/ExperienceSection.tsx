// ExperienceSection.tsx
import { useState } from "react";
import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CalendarDays, ChevronRight, Code2, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { experience } from "../../data/experience";
import type { ExperienceItem } from "@/shared/types/experience";

function StarDeco({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

// Colores por tech para los badges
const TECH_COLORS: Record<string, string> = {
  React:       "border-cyan-300/50 bg-cyan-50/80 text-cyan-700 dark:border-cyan-700/40 dark:bg-cyan-950/30 dark:text-cyan-300",
  TypeScript:  "border-blue-300/50 bg-blue-50/80 text-blue-700 dark:border-blue-700/40 dark:bg-blue-950/30 dark:text-blue-300",
  ".NET":      "border-violet-300/50 bg-violet-50/80 text-violet-700 dark:border-violet-700/40 dark:bg-violet-950/30 dark:text-violet-300",
  "SQL Server":"border-orange-300/50 bg-orange-50/80 text-orange-700 dark:border-orange-700/40 dark:bg-orange-950/30 dark:text-orange-300",
  Git:         "border-rose-300/50 bg-rose-50/80 text-rose-700 dark:border-rose-700/40 dark:bg-rose-950/30 dark:text-rose-300",
};
const TECH_DEFAULT = "border-[#E6DFD0] bg-[#F5F0E3]/80 text-[#7A6B5A] dark:border-[#232942] dark:bg-[#1A1F35]/60 dark:text-[#8A8598]";

export default function ExperienceSection() {
  const [activeResp, setActiveResp] = useState<number | null>(null);

  return (
    <SectionLayout id="experience">
      <div className="mx-auto max-w-2xl px-4 py-20 md:py-28">

        {/* ── Encabezado ── */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 opacity-60">
            <StarDeco size={5} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.2s]" />
            <StarDeco size={9} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse" />
            <StarDeco size={4} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.8s]" />
            <StarDeco size={7} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:1.2s]" />
            <StarDeco size={4} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.5s]" />
          </div>

          <h2
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-tight text-[#1A1614] dark:text-[#E8E4DD]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Experiencia
          </h2>

          <div className="flex items-center gap-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-16 bg-gradient-to-r from-[#C8902E]/80 via-[#C8902E] to-[#C8902E]/80 dark:from-[#E8C368]/80 dark:via-[#E8C368] dark:to-[#E8C368]/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A6B5A] dark:text-[#8A8598]">
            Trayectoria profesional
          </p>
        </div>

        {/* ── Cards de experiencia ── */}
        {experience.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-center opacity-50">
            <Sparkles className="h-8 w-8 text-[#C8902E] dark:text-[#E8C368]" />
            <p className="text-sm font-mono text-[#7A6B5A] dark:text-[#8A8598]">
              Pronto habrá experiencia aquí
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {experience.map((item) => (
              <ExperienceCard
                key={item.id}
                item={item}
                activeResp={activeResp}
                setActiveResp={setActiveResp}
              />
            ))}
          </div>
        )}

        {/* Decoración inferior */}
        <div className="mt-12 flex items-center justify-center gap-3 opacity-40">
          <StarDeco size={5} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8902E]/50 to-transparent dark:via-[#E8C368]/50" />
          <Sparkles className="h-4 w-4 text-[#C8902E] dark:text-[#E8C368]" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8902E]/50 to-transparent dark:via-[#E8C368]/50" />
          <StarDeco size={5} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.7s]" />
        </div>
      </div>
    </SectionLayout>
  );
}

/* ── Tarjeta de experiencia ── */
function ExperienceCard({
  item,
  activeResp,
  setActiveResp,
}: {
  item: ExperienceItem;
  activeResp: number | null;
  setActiveResp: (i: number | null) => void;
}) {
  const isActive = item.endDate === "Actualidad";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E6DFD0] bg-white/60 backdrop-blur-sm
      dark:border-[#232942] dark:bg-[#111827]/60"
      style={{ boxShadow: "0 4px 24px rgba(200,144,46,0.07)" }}
    >
      {/* Franja lateral dorada */}
      <div
        className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
        style={{
          background: "linear-gradient(to bottom, #C8902E, #E8C368, #C8902E)",
          boxShadow: "2px 0 12px rgba(200,144,46,0.3)",
        }}
      />

      <div className="pl-6 pr-5 pt-5 pb-5">

        {/* Header */}
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            {/* Ícono */}
            <div
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
              style={{
                background: "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E 60%, #92400e)",
                boxShadow: "0 0 16px 4px rgba(200,144,46,0.35)",
              }}
            >
              <Briefcase className="h-5 w-5 text-white drop-shadow" />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7A6B5A] dark:text-[#8A8598]">
                {item.companyOrOrg}
              </p>
              <h3
                className="text-lg font-black leading-tight text-[#1A1614] dark:text-[#E8E4DD]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.role}
              </h3>
            </div>
          </div>

          {/* Fechas + badge */}
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#7A6B5A] dark:text-[#8A8598]">
              <CalendarDays className="h-3 w-3" />
              <span>{item.startDate} — {item.endDate}</span>
            </div>
            <Badge
              variant="outline"
              className={cn(
                "text-[9px] font-mono tracking-wide",
                isActive
                  ? "border-amber-300/60 bg-amber-50/80 text-amber-700 dark:border-amber-600/40 dark:bg-amber-950/30 dark:text-amber-400"
                  : "border-[#E6DFD0] bg-[#F5F0E3]/80 text-[#7A6B5A] dark:border-[#232942] dark:bg-[#1A1F35]/80 dark:text-[#8A8598]"
              )}
            >
              {isActive ? "● Activo" : "✓ Finalizado"}
            </Badge>
          </div>
        </div>

        {/* ── Responsabilidades — lista interactiva ── */}
        {item.responsibilities && item.responsibilities.length > 0 && (
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-[#C8902E] dark:text-[#E8C368]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A6B5A] dark:text-[#8A8598]">
                Responsabilidades
              </span>
            </div>
            <ul className="space-y-1.5">
              {item.responsibilities.map((resp: string, i: number) => (
                <li
                  key={i}
                  onMouseEnter={() => setActiveResp(i)}
                  onMouseLeave={() => setActiveResp(null)}
                  className={cn(
                    "group flex cursor-default items-start gap-2.5 rounded-xl px-3 py-2 text-sm leading-relaxed transition-all duration-200",
                    activeResp === i
                      ? "bg-[#C8902E]/8 dark:bg-[#E8C368]/8"
                      : "hover:bg-[#C8902E]/5 dark:hover:bg-[#E8C368]/5"
                  )}
                  style={{
                    backgroundColor: activeResp === i
                      ? "rgba(200,144,46,0.07)"
                      : undefined,
                  }}
                >
                  <ChevronRight
                    className={cn(
                      "mt-0.5 h-3.5 w-3.5 flex-shrink-0 transition-all duration-200 text-[#C8902E]/50 dark:text-[#E8C368]/50",
                      activeResp === i && "translate-x-0.5 text-[#C8902E] dark:text-[#E8C368]"
                    )}
                  />
                  <span className={cn(
                    "transition-colors duration-200",
                    activeResp === i
                      ? "text-[#1A1614] dark:text-[#E8E4DD]"
                      : "text-[#3D2E1C] dark:text-[#D4CFC5]"
                  )}>
                    {resp}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Tech stack ── */}
        {item.technologies && item.technologies.length > 0 && (
          <div>
            <div className="mb-2.5 flex items-center gap-2">
              <Code2 className="h-3.5 w-3.5 text-[#C8902E] dark:text-[#E8C368]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A6B5A] dark:text-[#8A8598]">
                Stack
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech: string) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className={cn(
                    "text-[10px] font-mono tracking-wide transition-transform duration-150 hover:scale-105 cursor-default",
                    TECH_COLORS[tech] ?? TECH_DEFAULT
                  )}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}