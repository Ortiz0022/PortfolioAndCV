import type { LanguageItem } from "@/shared/types/language";
import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { languages } from "../../data/languages";
import { Sparkles } from "lucide-react";
import { StarDeco } from "./StarDeco";

const LANG_COLORS: Record<
  string,
  { accent: string; glow: string; star: string }
> = {
  "lang-es": {
    accent: "#C8902E",
    glow: "rgba(200,144,46,0.45)",
    star: "#E8C368",
  },
  "lang-en": {
    accent: "#0891b2",
    glow: "rgba(8,145,178,0.45)",
    star: "#38bdf8",
  },
  "lang-pt": {
    accent: "#0d9488",
    glow: "rgba(13,148,136,0.45)",
    star: "#2dd4bf",
  },
};

const FALLBACK_COLOR = {
  accent: "#9333ea",
  glow: "rgba(147,51,234,0.45)",
  star: "#a78bfa",
};

const LEVEL_STARS: Record<string, number> = {
  basic: 1,
  intermediate: 3,
  advanced: 4,
  native: 5,
};

export default function LanguagesSection() {
  return (
    <SectionLayout id="languages">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-12 md:py-10 lg:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <h2
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-black text-[#1A1614] dark:text-[#E8E4DD]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Idiomas
          </h2>

          <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#7A6B5A] dark:text-[#8A8598]">
            Competencia lingüística
          </p>
        </div>

        <div className="flex flex-col divide-y divide-[#E6DFD0]/60 dark:divide-[#232942]/60">
          {languages.map((lang) => (
            <LanguageRow key={lang.id} item={lang} />
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center gap-3 opacity-40">
          <Sparkles className="h-4 w-4 text-[#C8902E]" />
        </div>
      </div>
    </SectionLayout>
  );
}

function LanguageRow({ item }: { item: LanguageItem }) {
  const colors = LANG_COLORS[item.id] ?? FALLBACK_COLOR;
  const stars = LEVEL_STARS[item.level] ?? 1;

  return (
    <div className="group grid grid-cols-[1fr_auto] items-center gap-4 py-8 md:grid-cols-[2fr_3fr_auto] md:gap-8">
      {/* Language name */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <StarDeco
            size={14}
            style={{
              color: colors.star,
              filter: `drop-shadow(0 0 4px ${colors.glow})`,
            }}
            className="animate-pulse"
          />

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3
              className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-[#1A1614] dark:text-[#E8E4DD]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.name}
            </h3>

            {item.band && (
              <span
                className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
                style={{
                  background: colors.glow.replace(/[\d.]+\)$/, "0.12)"),
                  border: `1px solid ${colors.glow.replace(
                    /[\d.]+\)$/,
                    "0.3)"
                  )}`,
                  color: colors.accent,
                }}
              >
                {item.band}
              </span>
            )}
          </div>
        </div>

        {item.notes && (
          <p className="pl-[22px] text-xs italic text-[#7A6B5A]/80 dark:text-[#8A8598]/80">
            {item.notes}
          </p>
        )}
      </div>

      {/* Traits */}
      {item.traits && (
        <div className="hidden flex-wrap gap-2 md:flex">
          {item.traits.map((trait) => (
            <span
              key={trait}
              className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{
                background: colors.glow.replace(/[\d.]+\)$/, "0.12)"),
                border: `1px solid ${colors.glow.replace(/[\d.]+\)$/, "0.28)")}`,
                color: colors.accent,
              }}
            >
              {trait}
            </span>
          ))}
        </div>
      )}

      {/* Stars */}
      <div className="flex flex-col items-end gap-2">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarDeco
              key={i}
              size={i < stars ? 14 : 11}
              style={{
                color: i < stars ? colors.star : "rgba(122,107,90,0.25)",
                filter:
                  i < stars ? `drop-shadow(0 0 3px ${colors.glow})` : "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}