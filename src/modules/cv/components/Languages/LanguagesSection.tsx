// LanguagesSection.tsx
import type { LanguageItem } from "@/shared/types/language";
import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { languages } from "../../data/languages";
import { Sparkles } from "lucide-react";

function StarDeco({ size = 10, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" className={className} style={style}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

const LEVEL_CONFIG: Record<string, { label: string; sublabel: string; percent: number; stars: number }> = {
  native:       { label: "Nativo",      sublabel: "Lengua materna",          percent: 100, stars: 5 },
  advanced:     { label: "Avanzado",    sublabel: "Dominio alto",            percent: 80,  stars: 4 },
  intermediate: { label: "Intermedio",  sublabel: "Comunicación fluida",     percent: 55,  stars: 3 },
  basic:        { label: "Básico",      sublabel: "Conocimientos iniciales", percent: 25,  stars: 1 },
};

const LANG_CONFIG: Record<string, { accent: string; glow: string; barFrom: string; barTo: string; starColor: string }> = {
  "lang-es": {
    accent: "#C8902E",
    glow: "rgba(200,144,46,0.45)",
    barFrom: "#fbbf24",
    barTo: "#C8902E",
    starColor: "#E8C368",
  },
  "lang-en": {
    accent: "#0891b2",
    glow: "rgba(8,145,178,0.45)",
    barFrom: "#67e8f9",
    barTo: "#0891b2",
    starColor: "#38bdf8",
  },
  "lang-pt": {
    accent: "#0d9488",
    glow: "rgba(13,148,136,0.45)",
    barFrom: "#5eead4",
    barTo: "#0d9488",
    starColor: "#2dd4bf",
  },
};

const FALLBACK_LANG = { accent: "#9333ea", glow: "rgba(147,51,234,0.45)", barFrom: "#c4b5fd", barTo: "#9333ea", starColor: "#a78bfa" };

export default function LanguagesSection() {
  return (
    <SectionLayout id="languages">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-12 md:py-24 lg:px-16">

        {/* ── Encabezado ── */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 opacity-60">
            <StarDeco size={5} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:0.2s]" />
            <StarDeco size={9} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse" />
            <StarDeco size={4} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.6s]" />
            <StarDeco size={7} className="text-[#C8902E] dark:text-[#E8C368] animate-pulse [animation-delay:1s]" />
            <StarDeco size={4} className="text-[#C8902E]/60 dark:text-[#E8C368]/60 animate-pulse [animation-delay:0.4s]" />
          </div>

          <h2
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-tight text-[#1A1614] dark:text-[#E8E4DD]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Idiomas
          </h2>

          <div className="flex items-center gap-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-16 bg-gradient-to-r from-[#C8902E]/80 via-[#C8902E] to-[#C8902E]/80 dark:from-[#E8C368]/80 dark:via-[#E8C368] dark:to-[#E8C368]/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C8902E]/60 dark:to-[#E8C368]/60" />
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A6B5A] dark:text-[#8A8598]">
            Comunicación global
          </p>
        </div>

        {/* ── Filas de idioma ── */}
        <div className="flex flex-col divide-y divide-[#E6DFD0]/60 dark:divide-[#232942]/60">
          {languages.map((lang, index) => (
            <LanguageRow key={lang.id} item={lang} index={index} />
          ))}
        </div>

        {/* Decoración inferior */}
        <div className="mt-14 flex items-center justify-center gap-3 opacity-40">
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

function LanguageRow({ item }: { item: LanguageItem; index: number }) {
  const lvl = LEVEL_CONFIG[item.level] ?? LEVEL_CONFIG.basic;
  const cfg = LANG_CONFIG[item.id] ?? FALLBACK_LANG;

  return (
    <div
      className="group grid grid-cols-[1fr_auto] md:grid-cols-[2fr_3fr_auto] items-center gap-4 md:gap-8 py-8 transition-all duration-300"
    >
      {/* ── Col 1: nombre + sublabel ── */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          {/* Estrella de acento */}
          <StarDeco
            size={14}
            style={{ color: cfg.starColor, filter: `drop-shadow(0 0 4px ${cfg.glow})` }}
            className="flex-shrink-0 animate-pulse"
          />
          <h3
            className="text-[clamp(1.6rem,4vw,2.8rem)] font-black leading-none text-[#1A1614] dark:text-[#E8E4DD] transition-all duration-300 group-hover:tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item.name}
          </h3>
        </div>
        <p className="pl-[22px] text-xs font-mono uppercase tracking-[0.18em] text-[#7A6B5A] dark:text-[#8A8598]">
          {lvl.sublabel}
        </p>
        {item.notes && (
          <p className="pl-[22px] text-xs italic text-[#7A6B5A]/80 dark:text-[#8A8598]/80 mt-0.5">
            {item.notes}
          </p>
        )}
      </div>

      {/* ── Col 2 (desktop): barra de progreso ── */}
      <div className="hidden md:flex flex-col gap-2">
        {/* Barra gruesa */}
        <div
          className="relative h-2.5 w-full overflow-hidden rounded-full"
          style={{ background: `${cfg.glow.replace(/[\d.]+\)$/, "0.1)")}` }}
        >
          <div
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-700"
            style={{
              width: `${lvl.percent}%`,
              background: `linear-gradient(90deg, ${cfg.barFrom}, ${cfg.barTo})`,
              boxShadow: `0 0 12px ${cfg.glow}, 0 0 4px ${cfg.glow}`,
            }}
          />
          {/* Brillo en la barra */}
          <div
            className="absolute top-0 left-0 h-full rounded-full opacity-50"
            style={{
              width: `${lvl.percent * 0.4}%`,
              background: "linear-gradient(90deg, rgba(255,255,255,0.6), transparent)",
            }}
          />
        </div>

        {/* Marcadores de porcentaje */}
        <div className="flex justify-between px-0.5">
          {[0, 25, 50, 75, 100].map((mark) => (
            <span
              key={mark}
              className="text-[9px] font-mono transition-all duration-300"
              style={{
                color: mark <= lvl.percent ? cfg.accent : "rgba(122,107,90,0.4)",
                fontWeight: mark === lvl.percent ? "700" : "400",
              }}
            >
              {mark === lvl.percent ? `${mark}%` : "·"}
            </span>
          ))}
        </div>
      </div>

      {/* ── Col 3: estrellas de nivel + badge ── */}
      <div className="flex flex-col items-end gap-2">
        {/* Estrellas */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarDeco
              key={i}
              size={i < lvl.stars ? 14 : 11}
              style={{
                color: i < lvl.stars ? cfg.starColor : "rgba(122,107,90,0.25)",
                filter: i < lvl.stars ? `drop-shadow(0 0 3px ${cfg.glow})` : "none",
                transition: "all 0.2s ease",
              }}
            />
          ))}
        </div>

        {/* Badge de nivel */}
        <span
          className="rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em]"
          style={{
            background: cfg.glow.replace(/[\d.]+\)$/, "0.12)"),
            border: `1px solid ${cfg.glow.replace(/[\d.]+\)$/, "0.35)")}`,
            color: cfg.accent,
          }}
        >
          {lvl.label}
        </span>

        {/* Barra mobile */}
        <div className="md:hidden w-20 mt-1">
          <div
            className="h-1.5 w-full overflow-hidden rounded-full"
            style={{ background: cfg.glow.replace(/[\d.]+\)$/, "0.1)") }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${lvl.percent}%`,
                background: `linear-gradient(90deg, ${cfg.barFrom}, ${cfg.barTo})`,
                boxShadow: `0 0 8px ${cfg.glow}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}