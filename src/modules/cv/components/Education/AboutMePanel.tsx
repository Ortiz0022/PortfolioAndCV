import { profile } from "../../data/profile";
import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutMePanel() {
  return (
    
    <aside
      className={cn(
        "relative rounded-3xl border px-5 py-5 md:px-6 md:py-6",
        "bg-white/70 backdrop-blur-sm dark:bg-[#111827]/60",
        "border-[rgba(200,144,46,0.18)] dark:border-[rgba(232,195,104,0.14)]",
        "shadow-[0_8px_28px_rgba(200,144,46,0.08)]"
      )}
    >
      
      <div className="mb-5 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E 60%, #92400e)",
            boxShadow: "0 0 12px 2px rgba(200,144,46,0.18)",
          }}
        >
          <BookOpen className="h-4 w-4 text-white" />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7A6B5A] dark:text-[#8A8598]">
            Sobre mí
          </p>
          <h3
            className="text-lg font-bold text-[#1A1614] dark:text-[#E8E4DD]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Perfil profesional
          </h3>
        </div>
      </div>

      <div className="space-y-4 text-sm leading-7 text-[#3D2E1C] dark:text-[#D4CFC5]">
        {profile.summary?.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {profile.professional?.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-[#7A6B5A] dark:text-[#8A8598]">
            Fortalezas
          </p>

          <ul className="grid gap-2 sm:grid-cols-2">
            {profile.professional.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex items-start gap-2 text-sm text-[#5A4733] dark:text-[#CFC9BD]"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C8902E] dark:bg-[#E8C368]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}