import { cn } from "@/lib/utils";
import { useTheme } from "@/shared/providers/ThemeProvider";

interface PlanetStyle {
  gradientDark: string;
  gradientLight: string;
  glowDark: string;
  glowLight: string;
  borderDark: string;
  borderLight: string;
}

interface OrbitNodeProps {
  label: string;
  href?: string;
  className?: string;
  colorClassName?: string;
  planetStyle?: PlanetStyle;
  small?: boolean;
  pulseDelay?: string;
}

/**
 * Nodo reutilizable para las órbitas del hero.
 * Puede renderizarse como:
 * - planeta visual
 * - etiqueta/enlace simple
 */
export default function OrbitNode({
  label,
  href,
  className,
  colorClassName,
  planetStyle,
  small = false,
  pulseDelay = "0s",
}: OrbitNodeProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const isPlanet = !!planetStyle;
  const size = small ? "h-9 w-9 text-[8px]" : "h-14 w-14 text-[10px]";

  const content = isPlanet ? (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-semibold text-white select-none",
        "cursor-pointer",
        size,
        className
      )}
      style={{
        background: isDark ? planetStyle.gradientDark : planetStyle.gradientLight,
        border: `1.5px solid ${
          isDark ? planetStyle.borderDark : planetStyle.borderLight
        }`,
        boxShadow: `0 0 ${
          isDark ? "18px 4px" : "14px 3px"
        } ${isDark ? planetStyle.glowDark : planetStyle.glowLight},
          0 0 ${isDark ? "6px 1px" : "5px 1px"} ${
            isDark ? planetStyle.glowDark : planetStyle.glowLight
          } inset`,
        animation: "planet-breathe 3s ease-in-out infinite",
        animationDelay: pulseDelay,
      }}
    >
      {!small && (
        <span className="block px-1 text-center leading-tight drop-shadow-md">
          {label}
        </span>
      )}
    </div>
  ) : (
    <div
      className={cn(
        "flex h-auto w-auto items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
        "border-[#E6DFD0] bg-white/40 text-[#3D2E1C] hover:border-[#C8902E]/50 hover:bg-white/70",
        "dark:border-[#232942] dark:bg-white/5 dark:text-[#D4CFC5] dark:hover:border-[#E8C368]/40 dark:hover:bg-white/10",
        colorClassName,
        className
      )}
    >
      <span>{label}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("#") ? undefined : "_blank"}
        rel={href.startsWith("#") ? undefined : "noreferrer"}
        aria-label={label}
        className="block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
      >
        {content}
      </a>
    );
  }

  return content;
}