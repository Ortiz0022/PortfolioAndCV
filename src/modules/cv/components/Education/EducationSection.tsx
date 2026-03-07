// EducationSection.tsx
import { useState } from "react";
import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { education } from "../../data/education";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ChevronDown, GraduationCap,  Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

function StarDeco({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

// Colores únicos por ítem para que cada card tenga su acento
const CARD_ACCENTS = [
  {
    dot: "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E 60%, #92400e)",
    glow: "rgba(200,144,46,0.35)",
    border: "rgba(200,144,46,0.25)",
    borderHover: "rgba(200,144,46,0.5)",
    starColor: "text-[#C8902E] dark:text-[#E8C368]",
    badgeActive: "border-amber-300/60 bg-amber-50/80 text-amber-700 dark:border-amber-600/40 dark:bg-amber-950/30 dark:text-amber-400",
  },
  {
    dot: "radial-gradient(circle at 35% 35%, #c7d2fe, #6366f1 60%, #312e81)",
    glow: "rgba(99,102,241,0.3)",
    border: "rgba(99,102,241,0.2)",
    borderHover: "rgba(99,102,241,0.45)",
    starColor: "text-indigo-400 dark:text-indigo-300",
    badgeActive: "border-indigo-300/60 bg-indigo-50/80 text-indigo-700 dark:border-indigo-600/40 dark:bg-indigo-950/30 dark:text-indigo-400",
  },
  {
    dot: "radial-gradient(circle at 35% 35%, #bbf7d0, #16a34a 60%, #14532d)",
    glow: "rgba(22,163,74,0.3)",
    border: "rgba(22,163,74,0.2)",
    borderHover: "rgba(22,163,74,0.45)",
    starColor: "text-emerald-500 dark:text-emerald-400",
    badgeActive: "border-emerald-300/60 bg-emerald-50/80 text-emerald-700 dark:border-emerald-600/40 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
];

export default function EducationSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <SectionLayout id="education">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12 md:py-24 lg:px-16">

        {/* ── Encabezado ── */}
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          {/* Constelación decorativa arriba */}
          <div className="flex items-center gap-2 opacity-60">
            <StarDeco size={7} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0s]" />
            <StarDeco size={4} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.5s]" />
            <StarDeco size={9} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:1s]" />
            <StarDeco size={4} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:1.5s]" />
            <StarDeco size={6} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.3s]" />
          </div>

          <h2
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-tight text-[#1A1614] dark:text-[#E8E4DD]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Educación
          </h2>

          {/* Separador dorado */}
          <div className="flex items-center gap-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-16 bg-gradient-to-r from-[#C8902E]/80 via-[#C8902E] to-[#C8902E]/80 dark:from-[#E8C368]/80 dark:via-[#E8C368] dark:to-[#E8C368]/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A6B5A] dark:text-[#8A8598]">
            Formación académica
          </p>
        </div>

        {/* ── Cards acordeón ── */}
        <div className="flex flex-col gap-4">
          {education.map((item, index) => {
            const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
            const isOpen = openId === item.id;
            const isDone = item.endDate !== "Actualidad";

            return (
              <div
                key={item.id}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border transition-all duration-300",
                  "bg-white/60 backdrop-blur-sm dark:bg-[#111827]/60",
                  isOpen
                    ? "shadow-lg"
                    : "hover:-translate-y-0.5 hover:shadow-md"
                )}
                style={{
                  borderColor: isOpen ? accent.borderHover : accent.border,
                  boxShadow: isOpen
                    ? `0 8px 32px ${accent.glow}, 0 0 0 1px ${accent.borderHover}`
                    : undefined,
                }}
              >
                {/* Glow interno sutil cuando está abierto */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${accent.glow.replace("0.3", "0.06").replace("0.35", "0.06")}, transparent)`,
                    opacity: isOpen ? 1 : 0,
                  }}
                />

                {/* ── Header clickeable ── */}
                <button
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  {/* Ícono planeta */}
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: accent.dot,
                      boxShadow: `0 0 14px 4px ${accent.glow}`,
                    }}
                  >
                    <GraduationCap className="h-4 w-4 text-white drop-shadow" />
                  </div>

                  {/* Texto */}
                  <div className="flex-1 min-w-0">
                    <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#7A6B5A] dark:text-[#8A8598] truncate">
                      {item.institution}
                    </p>
                    <h3
                      className="text-sm font-bold leading-snug text-[#1A1614] dark:text-[#E8E4DD] md:text-base"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.program}
                    </h3>
                  </div>

                  {/* Fecha + badge + chevron */}
                  <div className="flex flex-shrink-0 flex-col items-end gap-1.5">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-[#7A6B5A] dark:text-[#8A8598]">
                      <CalendarDays className="h-3 w-3" />
                      <span className="hidden sm:inline">{item.startDate}–{item.endDate}</span>
                    </div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[9px] font-mono tracking-wide px-2 py-0",
                        isDone
                          ? "border-[#E6DFD0] bg-[#F5F0E3]/80 text-[#7A6B5A] dark:border-[#232942] dark:bg-[#1A1F35]/80 dark:text-[#8A8598]"
                          : accent.badgeActive
                      )}
                    >
                      {isDone ? "✓ Completado" : "● En curso"}
                    </Badge>
                  </div>

                  {/* Chevron animado */}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 flex-shrink-0 transition-transform duration-300 text-[#7A6B5A] dark:text-[#8A8598]",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {/* ── Contenido expandible ── */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-5 pb-5 pt-1">
                    {/* Separador con estrellitas */}
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-px flex-1"
                        style={{ background: `linear-gradient(to right, ${accent.borderHover}, transparent)` }} />
                      <StarDeco size={7} className={cn("animate-pulse", accent.starColor)} />
                      <StarDeco size={4} className={cn("animate-pulse [animation-delay:0.4s]", accent.starColor)} />
                      <StarDeco size={7} className={cn("animate-pulse [animation-delay:0.8s]", accent.starColor)} />
                      <span className="h-px flex-1"
                        style={{ background: `linear-gradient(to left, ${accent.borderHover}, transparent)` }} />
                    </div>

                    {/* Fecha completa en mobile */}
                    <div className="mb-3 flex items-center gap-1.5 text-xs font-mono text-[#7A6B5A] dark:text-[#8A8598] sm:hidden">
                      <CalendarDays className="h-3 w-3" />
                      <span>{item.startDate} — {item.endDate}</span>
                    </div>

                    {/* Notas */}
                    {item.notes && item.notes.length > 0 && (
                      <ul className="space-y-2">
                        {item.notes.map((note, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3D2E1C] dark:text-[#D4CFC5]">
                            <StarDeco
                              size={7}
                              className={cn("mt-1.5 flex-shrink-0 opacity-70", accent.starColor)}
                            />
                            {note}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Constelación decorativa abajo ── */}
        <div className="mt-10 flex items-center justify-center gap-3 opacity-40">
          <StarDeco size={5} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.2s]" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8902E]/50 to-transparent dark:via-[#E8C368]/50" />
          <Sparkles className="h-4 w-4 text-[#C8902E] dark:text-[#E8C368]" />
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#C8902E]/50 to-transparent dark:via-[#E8C368]/50" />
          <StarDeco size={5} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.7s]" />
        </div>
      </div>
    </SectionLayout>
  );
}