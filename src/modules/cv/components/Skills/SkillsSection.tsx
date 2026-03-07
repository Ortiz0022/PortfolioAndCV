import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { skills } from "../../data/skills";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SkillItem } from "@/shared/types/skill";

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

const CATEGORY_ORDER = ["Frontend", "Backend", "Database", "Tools"] as const;

const CATEGORY_CONFIG: Record<
  string,
  {
    label: string;
    dot: string;
    accentText: string;
    line: string;
    glow: string;
    borderLight: string;
    borderDark: string;
    bgLight: string;
    bgDark: string;
  }
> = {
  Frontend: {
    label: "Frontend",
    dot: "#06b6d4",
    accentText: "text-cyan-600 dark:text-cyan-300",
    line: "from-cyan-200/80 dark:from-cyan-700/30",
    glow: "rgba(6,182,212,0.16)",
    borderLight: "border-cyan-200/70",
    borderDark: "dark:border-cyan-900/40",
    bgLight: "bg-white/78",
    bgDark: "dark:bg-[#171D28]/72",
  },
  Backend: {
    label: "Backend",
    dot: "#8b5cf6",
    accentText: "text-violet-600 dark:text-violet-300",
    line: "from-violet-200/80 dark:from-violet-700/30",
    glow: "rgba(139,92,246,0.16)",
    borderLight: "border-violet-200/70",
    borderDark: "dark:border-violet-900/40",
    bgLight: "bg-white/78",
    bgDark: "dark:bg-[#1A1728]/72",
  },
  Database: {
    label: "Base de Datos",
    dot: "#f97316",
    accentText: "text-orange-600 dark:text-orange-300",
    line: "from-orange-200/80 dark:from-orange-700/30",
    glow: "rgba(249,115,22,0.16)",
    borderLight: "border-orange-200/70",
    borderDark: "dark:border-orange-900/40",
    bgLight: "bg-white/78",
    bgDark: "dark:bg-[#241812]/72",
  },
  Tools: {
    label: "Herramientas",
    dot: "#10b981",
    accentText: "text-emerald-600 dark:text-emerald-300",
    line: "from-emerald-200/80 dark:from-emerald-700/30",
    glow: "rgba(16,185,129,0.16)",
    borderLight: "border-emerald-200/70",
    borderDark: "dark:border-emerald-900/40",
    bgLight: "bg-white/78",
    bgDark: "dark:bg-[#142118]/72",
  },
};

function levelWeight(level?: string) {
  if (level === "advanced") return 3;
  if (level === "intermediate") return 2;
  return 1;
}

function groupSkills(items: SkillItem[]) {
  const grouped: Record<string, SkillItem[]> = {
    Frontend: [],
    Backend: [],
    Database: [],
    Tools: [],
  };

  for (const skill of items) {
    const category = skill.category ?? "Tools";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(skill);
  }

  for (const key of Object.keys(grouped)) {
    grouped[key].sort((a, b) => levelWeight(b.level) - levelWeight(a.level));
  }

  return grouped;
}

export default function SkillsSection() {
  const grouped = groupSkills(skills);

  return (
    <SectionLayout id="skills">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10 md:py-10 lg:px-10">
        <div className="mb-10 flex flex-col items-center gap-4 text-center">
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {CATEGORY_ORDER.map((category) => {
            const cfg = CATEGORY_CONFIG[category];
            const items = grouped[category] ?? [];

            return (
              <section
                key={category}
                className={cn(
                  "group rounded-2xl border p-5 transition-all duration-300",
                  "backdrop-blur-sm",
                  cfg.borderLight,
                  cfg.borderDark,
                  cfg.bgLight,
                  cfg.bgDark,
                  "hover:-translate-y-1"
                )}
                style={{
                  boxShadow: `0 8px 22px ${cfg.glow}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 18px 40px ${cfg.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 22px ${cfg.glow}`;
                }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: cfg.dot,
                      boxShadow: `0 0 10px ${cfg.dot}66`,
                    }}
                  />
                  <h3
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-[0.24em]",
                      cfg.accentText
                    )}
                  >
                    {cfg.label}
                  </h3>
                </div>

                <div
                  className={cn(
                    "mb-4 h-px bg-gradient-to-r to-transparent",
                    cfg.line
                  )}
                />

                <div className="space-y-2.5">
                  {items.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center justify-between gap-3 rounded-xl px-2 py-2 transition-colors duration-200 group-hover:bg-white/10 dark:group-hover:bg-white/[0.02]"
                    >
                      <span
                        className="truncate text-sm font-semibold text-[#2A2018] dark:text-[#ECE5DB]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {skill.name}
                      </span>

                      <div className="flex flex-shrink-0 items-center gap-1">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <span
                            key={i}
                            className="h-1.5 w-1.5 rounded-full"
                            style={{
                              backgroundColor:
                                i < levelWeight(skill.level)
                                  ? cfg.dot
                                  : "transparent",
                              border: `1px solid ${
                                i < levelWeight(skill.level)
                                  ? cfg.dot
                                  : "rgba(140,140,140,0.35)"
                              }`,
                              boxShadow:
                                i < levelWeight(skill.level)
                                  ? `0 0 4px ${cfg.glow}`
                                  : "none",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 opacity-40">
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