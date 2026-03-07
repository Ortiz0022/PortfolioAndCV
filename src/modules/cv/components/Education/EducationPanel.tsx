import { useState } from "react";
import { education } from "../../data/education";
import { CalendarDays, ChevronDown, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const CARD_ACCENTS = [
  {
    dot: "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E 60%, #92400e)",
    border: "rgba(200,144,46,0.22)",
    borderHover: "rgba(200,144,46,0.38)",
  },
  {
    dot: "radial-gradient(circle at 35% 35%, #c7d2fe, #6366f1 60%, #312e81)",
    border: "rgba(99,102,241,0.18)",
    borderHover: "rgba(99,102,241,0.34)",
  },
  {
    dot: "radial-gradient(circle at 35% 35%, #bbf7d0, #16a34a 60%, #14532d)",
    border: "rgba(22,163,74,0.18)",
    borderHover: "rgba(22,163,74,0.34)",
  },
];

export default function EducationPanel() {
  const [openId, setOpenId] = useState<string | null>(education[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-4">
      {education.map((item, index) => {
        const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border bg-white/70 backdrop-blur-sm transition-all duration-300 dark:bg-[#111827]/55",
              isOpen ? "shadow-sm" : "hover:-translate-y-0.5 hover:shadow-sm"
            )}
            style={{
              borderColor: isOpen ? accent.borderHover : accent.border,
            }}
          >
            <button
              onClick={() => toggle(item.id)}
              className="flex min-h-[130px] w-full items-start gap-3 px-3 py-4 text-left"
              aria-expanded={isOpen}
            >
              <div
                className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: accent.dot }}
              >
                <GraduationCap className="h-4 w-4 text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="mb-1 text-[9px] uppercase tracking-[0.14em] text-[#7A6B5A] dark:text-[#8A8598]">
                  {item.institution}
                </p>

                <h4
                  className="text-sm font-bold leading-snug text-[#1A1614] dark:text-[#E8E4DD] md:text-[1rem]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.program}
                </h4>

                <div className="mt-3 flex items-center gap-1 text-[11px] font-mono text-[#7A6B5A] dark:text-[#8A8598]">
                  <CalendarDays className="h-3 w-3" />
                  <span>
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
              </div>

              <ChevronDown
                className={cn(
                  "mt-1 h-4 w-4 flex-shrink-0 text-[#7A6B5A] transition-transform duration-300 dark:text-[#8A8598]",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-4 pb-4">
                {item.notes && item.notes.length > 0 && (
                  <ul className="space-y-2 border-t border-[#ECE3D6] pt-4 dark:border-[#2A3145]">
                    {item.notes.map((note, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3D2E1C] dark:text-[#D4CFC5]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C8902E] dark:bg-[#E8C368]" />
                        <span>{note}</span>
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
  );
}