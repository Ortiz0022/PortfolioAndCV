import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import avatarImg from "@/assets/images/avatar-chibi.png";
import { profile } from "@/modules/cv/data/profile";
import { useTheme } from "@/shared/providers/ThemeProvider";
import HeroTypewriter from "./HeroTypewriter";

type PlanetPalette = {
  gradientDark: string;
  gradientLight: string;
  glowDark: string;
  glowLight: string;
  borderDark: string;
  borderLight: string;
  textDark: string;
  textLight: string;
};

type HeroPlanet = {
  label: string;
  href: string;
  pos: { x: number; y: number };
  palette: PlanetPalette;
};

const HERO_PLANETS: HeroPlanet[] = [
  {
    label: "EDUCACIÓN",
    href: "#education",
    pos: { x: -39, y: -8 },
    palette: {
      gradientDark:
        "radial-gradient(circle at 35% 35%, #fcd9b9, #ea7a2f 72%, #b45309)",
      gradientLight:
        "radial-gradient(circle at 35% 35%, #fff5ec, #fdba74 72%, #fb923c)",
      glowDark: "rgba(251,146,60,0.26)",
      glowLight: "rgba(251,146,60,0.16)",
      borderDark: "rgba(251,146,60,0.24)",
      borderLight: "rgba(234,88,12,0.14)",
      textDark: "#474647",
      textLight: "#474647",
    },
  },
  {
    label: "EXPERIENCIA",
    href: "#experience",
    pos: { x: -24, y: -26 },
    palette: {
      gradientDark:
        "radial-gradient(circle at 35% 35%, #c7f5ff, #31c7e8 72%, #0891b2)",
      gradientLight:
        "radial-gradient(circle at 35% 35%, #eefcff, #9be7f5 72%, #67e8f9)",
      glowDark: "rgba(244,114,182,0.24)",
      glowLight: "rgba(244,114,182,0.14)",
      borderDark: "rgba(253,164,175,0.24)",
      borderLight: "rgba(225,29,72,0.12)",
      textDark: "#474647",
      textLight: "#474647",
    },
  },
  {
    label: "PORTAFOLIO",
    href: "#portfolio",
    pos: { x: 20, y: -20 },
    palette: {
      gradientDark:
        "radial-gradient(circle at 35% 35%, #ffd4de, #f15b7a 72%, #e11d48)",
      gradientLight:
        "radial-gradient(circle at 35% 35%, #fff0f4, #fda4af 72%, #fb7185)",
      glowDark: "rgba(103,232,249,0.24)",
      glowLight: "rgba(34,211,238,0.14)",
      borderDark: "rgba(103,232,249,0.24)",
      borderLight: "rgba(8,145,178,0.12)",
      textDark: "#474647",
      textLight: "#474647",
    },
  },
  {
    label: "CONTACTO",
    href: "#contact",
    pos: { x: 34, y: -2 },
    palette: {
      gradientDark:
        "radial-gradient(circle at 35% 35%, #f1d6ff, #bb6ef0 72%, #9333ea)",
      gradientLight:
        "radial-gradient(circle at 35% 35%, #fcf2ff, #e9c4ff 72%, #d8b4fe)",
      glowDark: "rgba(192,132,252,0.24)",
      glowLight: "rgba(192,132,252,0.14)",
      borderDark: "rgba(216,180,254,0.24)",
      borderLight: "rgba(147,51,234,0.12)",
      textDark: "#474647",
      textLight: "#474647",
    },
  },
  {
    label: "HABILIDADES",
    href: "#skills",
    pos: { x: -20, y: 32 },
    palette: {
      gradientDark:
        "radial-gradient(circle at 35% 35%, #fff2a8, #f0bc1f 72%, #ca8a04)",
      gradientLight:
        "radial-gradient(circle at 35% 35%, #fffbe7, #fde68a 72%, #facc15)",
      glowDark: "rgba(250,204,21,0.24)",
      glowLight: "rgba(250,204,21,0.14)",
      borderDark: "rgba(253,224,71,0.24)",
      borderLight: "rgba(202,138,4,0.12)",
      textDark: "#474647",
      textLight: "#474647",
    },
  },
  {
    label: "IDIOMAS",
    href: "#languages",
    pos: { x: 18, y: 44 },
    palette: {
      gradientDark:
        "radial-gradient(circle at 35% 35%, #caffda, #4bdd7b 72%, #16a34a)",
      gradientLight:
        "radial-gradient(circle at 35% 35%, #effff3, #bbf7d0 72%, #86efac)",
      glowDark: "rgba(74,222,128,0.22)",
      glowLight: "rgba(74,222,128,0.12)",
      borderDark: "rgba(74,222,128,0.22)",
      borderLight: "rgba(22,163,74,0.12)",
      textDark: "#474647",
      textLight: "#474647",
    },
  },
];

function HeroPlanetButton({
  label,
  href,
  gradient,
  glow,
  border,
  textColor,
  delay,
}: {
  label: string;
  href: string;
  gradient: string;
  glow: string;
  border: string;
  textColor: string;
  delay: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
      aria-label={label}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full text-[10px] font-semibold transition-transform duration-300 hover:scale-105 md:h-[4.4rem] md:w-[4.4rem] md:text-[10px]"
        style={{
          background: gradient,
          border: `1px solid ${border}`,
          color: textColor,
          boxShadow: `0 0 16px 2px ${glow}, inset 0 0 10px rgba(255,255,255,0.12)`,
          backdropFilter: "blur(6px)",
          animation: `planet-float 6s ease-in-out infinite`,
          animationDelay: delay,
        }}
      >
        <span className="px-1 text-center leading-tight">{label}</span>
      </div>
    </a>
  );
}

export default function SolarHero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const emailSocial = profile.socials.find((s) => s.platform === "email");
  const githubSocial = profile.socials.find((s) => s.platform === "github");
  const linkedinSocial = profile.socials.find((s) => s.platform === "linkedin");

  return (
    <section
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6"
      aria-label="Sección principal"
    >
      {/* Órbitas decorativas detrás */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="absolute h-[34rem] w-[34rem] rounded-full border border-primary/10 dark:border-primary/8" />
        <div className="absolute h-[48rem] w-[48rem] rounded-full border border-primary/8 dark:border-primary/6" />
        <div className="absolute h-[60rem] w-[60rem] rounded-full border border-primary/6 dark:border-primary/[0.04]" />
      </div>

      {/* Astronauta decorativa */}
      <div
        className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
        style={{
          transform: `translate(${mouse.x * 0.06}px, ${mouse.y * 0.06}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="absolute right-[6%] top-[10%]">
          <img
            src={avatarImg}
            alt=""
            aria-hidden="true"
            className="
              relative
              h-[150px] w-auto
              select-none object-contain
              opacity-60
              xl:h-[180px]
              dark:opacity-40
            "
            style={{
              filter: isDark
                ? "drop-shadow(0 10px 20px rgba(0,0,0,0.18))"
                : "drop-shadow(0 8px 16px rgba(200,144,46,0.10))",
            }}
          />
        </div>
      </div>

      {/* Contenido central */}
      <div
        className="relative z-20 flex max-w-3xl flex-col items-center gap-5 text-center"
        style={{
          transform: `translate(${mouse.x * 0.05}px, ${mouse.y * 0.05}px)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <div className="flex items-center gap-3 animate-fade-in-up">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-primary/50" />
          <div className="rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">
              {profile.location}
            </span>
          </div>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <header
          className="animate-fade-in-up stagger-1 leading-[0.9]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <h1>
            <span className="block text-[clamp(4rem,12vw,9rem)] font-black tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                Angel
              </span>
              <span className="relative inline-block text-primary">
                <span style={{ fontVariantLigatures: "none" }}>ı</span>
                <span
                  className="absolute left-1/2 animate-pulse -translate-x-1/2"
                  style={{
                    width: "0.22em",
                    height: "0.22em",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E)",
                    boxShadow: "0 0 8px 2px rgba(200,144,46,0.6)",
                  }}
                />
              </span>
              <span className="bg-gradient-to-r from-primary via-foreground to-foreground bg-clip-text text-transparent">
                ca
              </span>
            </span>

            <span className="mt-1 block text-[clamp(1.4rem,4.5vw,4rem)] font-light uppercase tracking-[0.22em] text-foreground/50">
              Ortiz Barrantes
            </span>
          </h1>
        </header>

        <div className="flex items-center gap-2 animate-fade-in-up stagger-2 opacity-50">
          <span className="h-px w-8 bg-primary/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
          <span className="h-px w-20 bg-gradient-to-r from-primary/80 via-primary to-primary/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
          <span className="h-px w-8 bg-primary/50" />
        </div>

        <HeroTypewriter />

        <nav
          className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up stagger-3"
          aria-label="Enlaces sociales"
        >
          {[
            {
              href: emailSocial?.href ?? "#",
              icon: <Mail className="h-4 w-4" />,
              label: "Email",
            },
            {
              href: githubSocial?.href ?? "#",
              icon: <Github className="h-4 w-4" />,
              label: "GitHub",
            },
            {
              href: linkedinSocial?.href ?? "#",
              icon: <Linkedin className="h-4 w-4" />,
              label: "LinkedIn",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-[0_0_20px_var(--glow)]"
            >
              {social.icon}
              <span>{social.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Planetas reales por encima del contenido */}
      <div
        className="absolute inset-0 z-30"
        style={{
          transform: `translate(${mouse.x * 0.1}px, ${mouse.y * 0.1}px)`,
          transition: "transform 0.35s ease-out",
        }}
      >
        {HERO_PLANETS.map((planet, index) => {
          const palette = isDark
            ? {
                gradient: planet.palette.gradientDark,
                glow: planet.palette.glowDark,
                border: planet.palette.borderDark,
                text: planet.palette.textDark,
              }
            : {
                gradient: planet.palette.gradientLight,
                glow: planet.palette.glowLight,
                border: planet.palette.borderLight,
                text: planet.palette.textLight,
              };

          return (
            <div
              key={planet.label}
              className="absolute"
              style={{
                left: `calc(50% + ${planet.pos.x}vw)`,
                top: `calc(50% + ${planet.pos.y}vh)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <HeroPlanetButton
                label={planet.label}
                href={planet.href}
                gradient={palette.gradient}
                glow={palette.glow}
                border={palette.border}
                textColor={palette.text}
                delay={`${(index * 0.3).toFixed(2)}s`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}