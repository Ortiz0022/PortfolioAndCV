import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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

export default function OrbitNode({
  label, href, className, colorClassName, planetStyle, small = false, pulseDelay = "0s",
}: OrbitNodeProps) {
  const isPlanet = !!planetStyle;
  const size = small ? "h-9 w-9 text-[8px]" : "h-14 w-14 text-[10px]";

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const content = isPlanet ? (() => {
    const glow = isDark ? planetStyle.glowDark : planetStyle.glowLight;

    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-full font-semibold text-white cursor-pointer select-none",
          size, className
        )}
        style={{
          background: isDark ? planetStyle.gradientDark : planetStyle.gradientLight,
          border: `1.5px solid ${isDark ? planetStyle.borderDark : planetStyle.borderLight}`,
          boxShadow: `0 0 ${isDark ? "18px 4px" : "14px 3px"} ${glow}, 0 0 ${isDark ? "6px 1px" : "5px 1px"} ${glow} inset`,
          animation: `planet-breathe 3s ease-in-out infinite`,
          animationDelay: pulseDelay,
        }}
      >
        {!small && (
          <span className="drop-shadow-md leading-tight text-center px-1 block">
            {label}
          </span>
        )}
      </div>
    );
  })() : (
    <div className={cn(
      "flex items-center justify-center rounded-full font-medium transition-all duration-300",
      "h-auto w-auto border px-4 py-2 text-sm",
      "border-[#E6DFD0] bg-white/40 text-[#3D2E1C] hover:border-[#C8902E]/50 hover:bg-white/70",
      "dark:border-[#232942] dark:bg-white/5 dark:text-[#D4CFC5] dark:hover:border-[#E8C368]/40 dark:hover:bg-white/10",
      colorClassName, className
    )}>
      <span>{label}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("#") ? undefined : "_blank"}
        rel={href.startsWith("#") ? undefined : "noreferrer"}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 rounded-full block"
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return <>{content}</>;
}