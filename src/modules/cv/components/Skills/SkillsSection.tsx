// SkillsSection.tsx
import { useState } from "react";
import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { skills } from "../../data/skills";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SkillItem } from "@/shared/types/skill";

function StarDeco({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

const LEVEL_CONFIG: Record<string, { label: string; dots: number; filled: number }> = {
  basic:        { label: "Básico",     dots: 3, filled: 1 },
  intermediate: { label: "Intermedio", dots: 3, filled: 2 },
  advanced:     { label: "Avanzado",   dots: 3, filled: 3 },
};

const CATEGORY_CONFIG: Record<string, {
  gradient: string;
  glowColor: string;
  borderActive: string;
  bgActive: string;
  dotFill: string;
  label: string;
}> = {
  Frontend: {
    gradient: "from-cyan-400 to-sky-600",
    glowColor: "rgba(8,145,178,0.35)",
    borderActive: "border-cyan-300/60 dark:border-cyan-600/50",
    bgActive: "bg-cyan-50 dark:bg-cyan-950/40",
    dotFill: "#0891b2",
    label: "Frontend",
  },
  Backend: {
    gradient: "from-violet-400 to-purple-700",
    glowColor: "rgba(147,51,234,0.35)",
    borderActive: "border-violet-300/60 dark:border-violet-600/50",
    bgActive: "bg-violet-50 dark:bg-violet-950/40",
    dotFill: "#9333ea",
    label: "Backend",
  },
  Database: {
    gradient: "from-orange-400 to-orange-700",
    glowColor: "rgba(234,88,12,0.35)",
    borderActive: "border-orange-300/60 dark:border-orange-600/50",
    bgActive: "bg-orange-50 dark:bg-orange-950/40",
    dotFill: "#ea580c",
    label: "Base de Datos",
  },
  Tools: {
    gradient: "from-emerald-400 to-green-700",
    glowColor: "rgba(22,163,74,0.35)",
    borderActive: "border-emerald-300/60 dark:border-emerald-600/50",
    bgActive: "bg-emerald-50 dark:bg-emerald-950/40",
    dotFill: "#16a34a",
    label: "Herramientas",
  },
};

const FALLBACK_CATEGORY = CATEGORY_CONFIG.Tools;

function groupByCategory(items: SkillItem[]): Map<string, SkillItem[]> {
  const map = new Map<string, SkillItem[]>();
  for (const item of items) {
    const cat = item.category ?? "Otros";
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(item);
  }
  return map;
}

export default function SkillsSection() {
  const grouped = groupByCategory(skills);
  const categories = Array.from(grouped.keys());
  const [activeTab, setActiveTab] = useState<string>(categories[0] ?? "");

  const activeItems = grouped.get(activeTab) ?? [];
  const activeCfg = CATEGORY_CONFIG[activeTab] ?? FALLBACK_CATEGORY;

  return (
    <SectionLayout id="skills">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12 md:py-24 lg:px-16">

        {/* ── Encabezado ── */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 opacity-60">
            <StarDeco size={4} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.3s]" />
            <StarDeco size={9} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse" />
            <StarDeco size={5} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.7s]" />
            <StarDeco size={7} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:1.1s]" />
            <StarDeco size={4} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.4s]" />
          </div>

          <h2
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-tight text-[#1A1614] dark:text-[#E8E4DD]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Habilidades
          </h2>

          <div className="flex items-center gap-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-16 bg-gradient-to-r from-[#C8902E]/80 via-[#C8902E] to-[#C8902E]/80 dark:from-[#E8C368]/80 dark:via-[#E8C368] dark:to-[#E8C368]/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A6B5A] dark:text-[#8A8598]">
            Stack tecnológico
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const cfg = CATEGORY_CONFIG[cat] ?? FALLBACK_CATEGORY;
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold",
                  "transition-all duration-300 outline-none",
                  "focus-visible:ring-2 focus-visible:ring-[#C8902E]/50",
                  isActive
                    ? cn("shadow-md", cfg.borderActive, cfg.bgActive, "text-[#1A1614] dark:text-[#E8E4DD]")
                    : "border-[#E6DFD0] bg-white/50 text-[#7A6B5A] hover:border-[#C8902E]/30 hover:bg-white/80 dark:border-[#232942] dark:bg-[#111827]/40 dark:text-[#8A8598] dark:hover:border-[#E8C368]/20"
                )}
                style={isActive ? { boxShadow: `0 4px 16px ${cfg.glowColor}` } : undefined}
              >
                {/* Bolita de color */}
                <span
                  className={cn(
                    "h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br",
                    cfg.gradient,
                    isActive ? "opacity-100" : "opacity-50"
                  )}
                  style={isActive
                    ? { boxShadow: `0 0 6px 2px ${cfg.glowColor}` }
                    : undefined}
                />
                {cfg.label}
                {/* Indicador underline activo */}
                {isActive && (
                  <span
                    className="absolute -bottom-px left-4 right-4 h-px rounded-full"
                    style={{ background: `linear-gradient(to right, transparent, ${cfg.dotFill}, transparent)` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Panel de pills ── */}
        <div
          key={activeTab} // remonta para animar entrada
          className="rounded-2xl border p-6 transition-all duration-300
            border-[#E6DFD0] bg-white/50 backdrop-blur-sm
            dark:border-[#232942] dark:bg-[#111827]/50"
          style={{ boxShadow: `0 4px 28px ${activeCfg.glowColor.replace("0.35", "0.1")}` }}
        >
          {/* Título de categoría dentro del panel */}
          <div className="mb-5 flex items-center gap-2">
            <span
              className={cn("h-3 w-3 rounded-full bg-gradient-to-br flex-shrink-0", activeCfg.gradient)}
              style={{ boxShadow: `0 0 8px 2px ${activeCfg.glowColor}` }}
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7A6B5A] dark:text-[#8A8598]">
              {activeCfg.label}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#E6DFD0] to-transparent dark:from-[#232942]" />
          </div>

          {/* Pills de skills */}
          <div className="flex flex-wrap gap-3">
            {activeItems.map((skill, i) => {
              const lvl = LEVEL_CONFIG[skill.level ?? "basic"];
              return (
                <div
                  key={skill.id}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl border px-4 py-2.5",
                    "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                    activeCfg.borderActive,
                    activeCfg.bgActive,
                  )}
                  style={{
                    animationDelay: `${i * 0.06}s`,
                    boxShadow: `0 2px 8px ${activeCfg.glowColor.replace("0.35", "0.08")}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px ${activeCfg.glowColor.replace("0.35", "0.25")}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 8px ${activeCfg.glowColor.replace("0.35", "0.08")}`;
                  }}
                >
                  {/* Nombre */}
                  <span
                    className="text-sm font-bold text-[#1A1614] dark:text-[#E8E4DD]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {skill.name}
                  </span>

                  {/* Separador */}
                  <span className="h-3 w-px bg-[#E6DFD0] dark:bg-[#232942]" />

                  {/* Dots de nivel */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: lvl.dots }).map((_, di) => (
                      <span
                        key={di}
                        className="h-2 w-2 rounded-full transition-all duration-200"
                        style={{
                          background: di < lvl.filled
                            ? `linear-gradient(135deg, ${activeCfg.dotFill}cc, ${activeCfg.dotFill})`
                            : "transparent",
                          border: `1.5px solid ${di < lvl.filled ? activeCfg.dotFill : activeCfg.glowColor.replace("0.35", "0.3")}`,
                          boxShadow: di < lvl.filled ? `0 0 4px ${activeCfg.glowColor}` : "none",
                        }}
                      />
                    ))}
                  </div>

                  {/* Etiqueta de nivel */}
                  <span className="text-[10px] font-mono text-[#7A6B5A] dark:text-[#8A8598]">
                    {lvl.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="mt-10 flex items-center justify-center gap-3 opacity-40">
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