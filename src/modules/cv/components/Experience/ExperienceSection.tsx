import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  CalendarDays,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { experience } from "../../data/experience";
import type { ExperienceItem } from "@/shared/types/experience";

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

const TECH_COLORS: Record<string, string> = {
  React:
    "border-cyan-300/50 bg-cyan-50/80 text-cyan-700 dark:border-cyan-700/40 dark:bg-cyan-950/30 dark:text-cyan-300",
  TypeScript:
    "border-blue-300/50 bg-blue-50/80 text-blue-700 dark:border-blue-700/40 dark:bg-blue-950/30 dark:text-blue-300",
  ".NET":
    "border-violet-300/50 bg-violet-50/80 text-violet-700 dark:border-violet-700/40 dark:bg-violet-950/30 dark:text-violet-300",
  "SQL Server":
    "border-orange-300/50 bg-orange-50/80 text-orange-700 dark:border-orange-700/40 dark:bg-orange-950/30 dark:text-orange-300",
  Git:
    "border-rose-300/50 bg-rose-50/80 text-rose-700 dark:border-rose-700/40 dark:bg-rose-950/30 dark:text-rose-300",
};

const TECH_DEFAULT =
  "border-[#E6DFD0] bg-[#F5F0E3]/80 text-[#7A6B5A] dark:border-[#232942] dark:bg-[#1A1F35]/60 dark:text-[#8A8598]";

export default function ExperienceSection() {
  return (
    <SectionLayout id="experience">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-12 md:py-10 lg:px-16">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 opacity-60">
            <StarDeco
              size={5}
              className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.2s]"
            />
            <StarDeco
              size={9}
              className="text-[#C8902E] dark:text-[#E8C368] animate-pulse"
            />
            <StarDeco
              size={4}
              className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.8s]"
            />
            <StarDeco
              size={7}
              className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:1.2s]"
            />
            <StarDeco
              size={4}
              className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.5s]"
            />
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

        {experience.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-center opacity-50">
            <Sparkles className="h-8 w-8 text-[#C8902E] dark:text-[#E8C368]" />
            <p className="text-sm font-mono text-[#7A6B5A] dark:text-[#8A8598]">
              Pronto habrá experiencia aquí
            </p>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="mt-12 flex items-center justify-center gap-3 opacity-40">
          <StarDeco
            size={5}
            className="text-[#C8902E] dark:text-[#E8C368] animate-pulse"
          />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8902E]/50 to-transparent dark:via-[#E8C368]/50" />
          <Sparkles className="h-4 w-4 text-[#C8902E] dark:text-[#E8C368]" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8902E]/50 to-transparent dark:via-[#E8C368]/50" />
          <StarDeco
            size={5}
            className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.7s]"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const topResponsibilities = item.responsibilities?.slice(0, 3) ?? [];

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300",
        "bg-white/70 backdrop-blur-sm dark:bg-[#111827]/60",
        "border-[#E6DFD0] dark:border-[#232942]",
        "hover:-translate-y-1 hover:shadow-lg"
      )}
      style={{
        boxShadow: "0 8px 28px rgba(200,144,46,0.08)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(200,144,46,0.7), transparent)",
        }}
      />

      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E 60%, #92400e)",
              boxShadow: "0 0 14px 2px rgba(200,144,46,0.22)",
            }}
          >
            <Briefcase className="h-4 w-4 text-white" />
          </div>

          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7A6B5A] dark:text-[#8A8598]">
              {item.companyOrOrg}
            </p>
            <h3
              className="text-lg font-bold leading-tight text-[#1A1614] dark:text-[#E8E4DD]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.role}
            </h3>
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center gap-1.5 text-[11px] font-mono text-[#7A6B5A] dark:text-[#8A8598]">
          <CalendarDays className="h-3 w-3" />
          <span className="whitespace-nowrap">
            {item.startDate} — {item.endDate}
          </span>
        </div>
      </div>

      {topResponsibilities.length > 0 && (
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-[#C8902E] dark:text-[#E8C368]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A6B5A] dark:text-[#8A8598]">
              Aportes clave
            </span>
          </div>

          <ul className="space-y-2">
            {topResponsibilities.map((resp, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3D2E1C] dark:text-[#D4CFC5]"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C8902E] dark:bg-[#E8C368]" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.technologies && item.technologies.length > 0 && (
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <Code2 className="h-3.5 w-3.5 text-[#C8902E] dark:text-[#E8C368]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A6B5A] dark:text-[#8A8598]">
              Stack
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <Badge
                key={`${item.id}-${tech}-${index}`}
                variant="outline"
                className={cn(
                  "cursor-default text-[10px] font-mono tracking-wide",
                  TECH_COLORS[tech] ?? TECH_DEFAULT
                )}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}