import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/modules/cv/data/profile";
import OrbitNode from "./OrbitNode";
import HeroTypewriter from "./HeroTypewriter";

// Planetas de secciones — semicírculo INFERIOR
const SECTION_PLANETS = [
  {
    label: "Educación", href: "#education",
    // posición relativa al centro del hero (vw, vh)
    pos: { x: -38, y: 32 },
    gradientDark:  "radial-gradient(circle at 35% 35%, #fed7aa, #ea580c 65%, #7c2d12)",
    gradientLight: "radial-gradient(circle at 35% 35%, #fff7ed, #f97316 65%, #c2410c)",
    glowDark: "rgba(234,88,12,0.55)", glowLight: "rgba(249,115,22,0.45)",
    borderDark: "rgba(251,146,60,0.5)", borderLight: "rgba(249,115,22,0.4)",
  },
  {
    label: "Experiencia", href: "#experience",
    pos: { x: -22, y: 40 },
    gradientDark:  "radial-gradient(circle at 35% 35%, #fecdd3, #e11d48 65%, #881337)",
    gradientLight: "radial-gradient(circle at 35% 35%, #fff1f2, #f43f5e 65%, #be123c)",
    glowDark: "rgba(225,29,72,0.55)", glowLight: "rgba(244,63,94,0.45)",
    borderDark: "rgba(253,164,175,0.5)", borderLight: "rgba(244,63,94,0.4)",
  },
  {
    label: "Habilidades", href: "#skills",
    pos: { x: -7, y: 44 },
    gradientDark:  "radial-gradient(circle at 35% 35%, #fef9c3, #ca8a04 65%, #713f12)",
    gradientLight: "radial-gradient(circle at 35% 35%, #fefce8, #eab308 65%, #a16207)",
    glowDark: "rgba(202,138,4,0.55)", glowLight: "rgba(234,179,8,0.5)",
    borderDark: "rgba(253,224,71,0.5)", borderLight: "rgba(234,179,8,0.45)",
  },
  {
    label: "Idiomas", href: "#languages",
    pos: { x: 8, y: 44 },
    gradientDark:  "radial-gradient(circle at 35% 35%, #bbf7d0, #16a34a 65%, #14532d)",
    gradientLight: "radial-gradient(circle at 35% 35%, #f0fdf4, #22c55e 65%, #15803d)",
    glowDark: "rgba(22,163,74,0.55)", glowLight: "rgba(34,197,94,0.45)",
    borderDark: "rgba(74,222,128,0.5)", borderLight: "rgba(34,197,94,0.4)",
  },
  {
    label: "Portafolio", href: "#portfolio",
    pos: { x: 23, y: 40 },
    gradientDark:  "radial-gradient(circle at 35% 35%, #a5f3fc, #0891b2 65%, #164e63)",
    gradientLight: "radial-gradient(circle at 35% 35%, #ecfeff, #06b6d4 65%, #0e7490)",
    glowDark: "rgba(8,145,178,0.55)", glowLight: "rgba(6,182,212,0.45)",
    borderDark: "rgba(103,232,249,0.5)", borderLight: "rgba(6,182,212,0.4)",
  },
  {
    label: "Contacto", href: "#contact",
    pos: { x: 39, y: 32 },
    gradientDark:  "radial-gradient(circle at 35% 35%, #e9d5ff, #9333ea 65%, #581c87)",
    gradientLight: "radial-gradient(circle at 35% 35%, #faf5ff, #a855f7 65%, #7e22ce)",
    glowDark: "rgba(147,51,234,0.55)", glowLight: "rgba(168,85,247,0.45)",
    borderDark: "rgba(216,180,254,0.5)", borderLight: "rgba(168,85,247,0.4)",
  },
];

// Planetas decorativos — arco SUPERIOR alrededor del nombre
const DECO_PLANETS = [
  {
    pos: { x: -44, y: -18 }, size: "sm" as const, delay: "0s",
    gradientDark:  "radial-gradient(circle at 35% 35%, #fde68a, #d97706 70%, #78350f)",
    gradientLight: "radial-gradient(circle at 35% 35%, #fef9c3, #f59e0b 70%, #b45309)",
    glowDark: "rgba(217,119,6,0.6)", glowLight: "rgba(245,158,11,0.55)",
    borderDark: "rgba(252,211,77,0.5)", borderLight: "rgba(245,158,11,0.45)",
  },
  {
    pos: { x: -30, y: -28 }, size: "xs" as const, delay: "0.4s",
    gradientDark:  "radial-gradient(circle at 35% 35%, #fbcfe8, #ec4899 70%, #831843)",
    gradientLight: "radial-gradient(circle at 35% 35%, #fdf2f8, #f472b6 70%, #be185d)",
    glowDark: "rgba(236,72,153,0.6)", glowLight: "rgba(244,114,182,0.55)",
    borderDark: "rgba(249,168,212,0.5)", borderLight: "rgba(244,114,182,0.45)",
  },
  {
    pos: { x: -12, y: -34 }, size: "xs" as const, delay: "0.9s",
    gradientDark:  "radial-gradient(circle at 35% 35%, #c7d2fe, #6366f1 70%, #312e81)",
    gradientLight: "radial-gradient(circle at 35% 35%, #eef2ff, #818cf8 70%, #4338ca)",
    glowDark: "rgba(99,102,241,0.6)", glowLight: "rgba(129,140,248,0.55)",
    borderDark: "rgba(165,180,252,0.5)", borderLight: "rgba(129,140,248,0.45)",
  },
  {
    pos: { x: 5, y: -36 }, size: "sm" as const, delay: "1.3s",
    gradientDark:  "radial-gradient(circle at 35% 35%, #bbf7d0, #16a34a 70%, #14532d)",
    gradientLight: "radial-gradient(circle at 35% 35%, #f0fdf4, #22c55e 70%, #15803d)",
    glowDark: "rgba(22,163,74,0.6)", glowLight: "rgba(34,197,94,0.55)",
    borderDark: "rgba(74,222,128,0.5)", borderLight: "rgba(34,197,94,0.45)",
  },
  {
    pos: { x: 22, y: -30 }, size: "xs" as const, delay: "0.6s",
    gradientDark:  "radial-gradient(circle at 35% 35%, #fed7aa, #ea580c 70%, #7c2d12)",
    gradientLight: "radial-gradient(circle at 35% 35%, #fff7ed, #f97316 70%, #c2410c)",
    glowDark: "rgba(234,88,12,0.6)", glowLight: "rgba(249,115,22,0.55)",
    borderDark: "rgba(251,146,60,0.5)", borderLight: "rgba(249,115,22,0.45)",
  },
  {
    pos: { x: 38, y: -20 }, size: "sm" as const, delay: "1.1s",
    gradientDark:  "radial-gradient(circle at 35% 35%, #e9d5ff, #9333ea 70%, #581c87)",
    gradientLight: "radial-gradient(circle at 35% 35%, #faf5ff, #a855f7 70%, #7e22ce)",
    glowDark: "rgba(147,51,234,0.6)", glowLight: "rgba(168,85,247,0.55)",
    borderDark: "rgba(216,180,254,0.5)", borderLight: "rgba(168,85,247,0.45)",
  },
];

const STARS = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  top: `${(i * 37 + 11) % 100}%`,
  left: `${(i * 61 + 7) % 100}%`,
  size: (i % 3) + 1,
  opacity: 0.1 + (i % 6) * 0.06,
  duration: `${2 + (i % 4)}s`,
  delay: `${(i * 0.3) % 5}s`,
  color: ["#ffffff","#E8C368","#a78bfa","#67e8f9","#ffffff"][i % 5],
}));

const SPARKLES = [
  { top: "10%", left: "16%", size: 20, color: "#E8C368", delay: "0s" },
  { top: "7%",  left: "60%", size: 13, color: "#a78bfa", delay: "1.2s" },
  { top: "80%", left: "83%", size: 18, color: "#67e8f9", delay: "0.6s" },
  { top: "83%", left: "13%", size: 14, color: "#E8C368", delay: "1.8s" },
  { top: "43%", left: "93%", size: 16, color: "#f9a8d4", delay: "2.2s" },
  { top: "55%", left: "4%",  size: 10, color: "#86efac", delay: "0.9s" },
];

function Sparkle({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}

// Tamaños de planetas decorativos
const DECO_SIZES = {
  xs: "h-7 w-7",
  sm: "h-10 w-10",
  md: "h-14 w-14",
};

export default function SolarHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({
      x: (e.clientX / window.innerWidth  - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  const emailSocial    = profile.socials.find(s => s.platform === "email");
  const githubSocial   = profile.socials.find(s => s.platform === "github");
  const linkedinSocial = profile.socials.find(s => s.platform === "linkedin");

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">

      {/* Fondo */}
      <div className="absolute inset-0 -z-30 bg-[#FBF8F1] dark:bg-[#0B0E17]" />

      {/* Blobs parallax */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {([
          { color:"#7B8CDE", top:"18%", left:"12%",   mx:-0.5, my:-0.5, tw:"w-96 h-96 blur-[120px] opacity-10 dark:opacity-[0.07]" },
          { color:"#C8902E", top:"auto",left:"auto", bottom:"18%", right:"12%", mx:0.4,  my:0.4,  tw:"w-80 h-80 blur-[100px] opacity-[0.12] dark:opacity-[0.08]" },
          { color:"#D4A0A0", top:"48%", left:"58%",   mx:0.2,  my:0.2,  tw:"w-64 h-64 blur-[80px] opacity-[0.08] dark:opacity-[0.05]" },
        ] as const).map((b, i) => (
          <div key={i} className={`absolute rounded-full ${b.tw}`}
            style={{
              background: b.color,
              top: "top" in b ? b.top : undefined,
              bottom: "bottom" in b ? b.bottom : undefined,
              left: "left" in b && b.left !== "auto" ? b.left : undefined,
              right: "right" in b ? b.right : undefined,
              transform: `translate(${mouse.x * b.mx}px, ${mouse.y * b.my}px)`,
              transition: "transform 0.5s ease-out",
            }} />
        ))}
      </div>

      {/* Estrellas + sparkles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {STARS.map((s) => (
          <div key={s.id} className="absolute rounded-full animate-pulse"
            style={{ top:s.top, left:s.left, width:s.size, height:s.size,
              opacity:s.opacity, backgroundColor:s.color,
              animationDuration:s.duration, animationDelay:s.delay }} />
        ))}
        {SPARKLES.map((sp, i) => (
          <div key={i} className="absolute animate-twinkle"
            style={{ top:sp.top, left:sp.left, "--delay":sp.delay, "--duration":"3s" } as React.CSSProperties}>
            <Sparkle size={sp.size} color={sp.color} />
          </div>
        ))}
      </div>

      {/* ── Planetas decorativos — arco superior, posición absoluta en viewport ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform:`translate(${mouse.x*0.25}px,${mouse.y*0.25}px)`, transition:"transform 0.4s ease-out" }}
      >
        {DECO_PLANETS.map((p, i) => {
          const glow = isDark ? p.glowDark : p.glowLight;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `calc(50% + ${p.pos.x}vw)`,
                top:  `calc(50% + ${p.pos.y}vh)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className={`${DECO_SIZES[p.size]} rounded-full`}
                style={{
                  background: isDark ? p.gradientDark : p.gradientLight,
                  border: `1.5px solid ${isDark ? p.borderDark : p.borderLight}`,
                  boxShadow: `0 0 14px 3px ${glow}, 0 0 5px 1px ${glow} inset`,
                  animation: `planet-breathe 3s ease-in-out infinite`,
                  animationDelay: p.delay,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* ── Planetas de sección — semicírculo inferior, con links ── */}
      <div
        className="pointer-events-auto absolute inset-0"
        style={{ transform:`translate(${mouse.x*0.15}px,${mouse.y*0.15}px)`, transition:"transform 0.4s ease-out" }}
      >
        {SECTION_PLANETS.map((p, i) => {
          const glow = isDark ? p.glowDark : p.glowLight;
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `calc(50% + ${p.pos.x}vw)`,
                top:  `calc(50% + ${p.pos.y}vh)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <a
                href={p.href}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 rounded-full"
                aria-label={p.label}
              >
                <div
                  className="h-14 w-14 rounded-full flex items-center justify-center text-[10px] font-semibold text-white cursor-pointer"
                  style={{
                    background: isDark ? p.gradientDark : p.gradientLight,
                    border: `1.5px solid ${isDark ? p.borderDark : p.borderLight}`,
                    boxShadow: `0 0 18px 4px ${glow}, 0 0 6px 1px ${glow} inset`,
                    animation: `planet-breathe 3s ease-in-out infinite`,
                    animationDelay: `${(i * 0.45).toFixed(2)}s`,
                  }}
                >
                  <span className="drop-shadow-md leading-tight text-center px-1">
                    {p.label}
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Texto central */}
      <div
        className="relative z-20 flex flex-col items-center gap-5 text-center px-6 max-w-2xl"
        style={{ transform:`translate(${mouse.x*0.1}px,${mouse.y*0.1}px)`, transition:"transform 0.3s ease-out" }}
      >
        {/* Badge ubicación */}
        <div className="flex items-center gap-3 animate-fade-in-up">
          <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#C8902E]/50 dark:to-[#E8C368]/50" />
          <div className="rounded-full border border-[#C8902E]/25 dark:border-[#E8C368]/25 bg-[#C8902E]/5 dark:bg-[#E8C368]/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C8902E] dark:text-[#E8C368]">
              {profile.location}
            </span>
          </div>
          <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#C8902E]/50 dark:to-[#E8C368]/50" />
        </div>

        {/* Nombre */}
        <h1
          className="animate-fade-in-up stagger-1 leading-[0.9]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-[clamp(4rem,12vw,9rem)] font-black tracking-tight">
            <span className="bg-gradient-to-r from-[#1A1614] via-[#1A1614] to-[#C8902E] bg-clip-text text-transparent dark:from-[#E8E4DD] dark:via-[#E8E4DD] dark:to-[#E8C368]">
              Angel
            </span>
            <span className="relative inline-block text-[#C8902E] dark:text-[#E8C368]">
              <span style={{ fontVariantLigatures: "none" }}>ı</span>
              <span
                className="absolute left-1/2 -translate-x-1/2 animate-pulse"
                style={{
                  top: "-0.18em", width: "0.22em", height: "0.22em",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 35% 35%, #fef3c7, #C8902E)",
                  boxShadow: "0 0 8px 2px rgba(200,144,46,0.6)",
                }}
              />
            </span>
            <span className="bg-gradient-to-r from-[#C8902E] via-[#1A1614] to-[#1A1614] bg-clip-text text-transparent dark:from-[#E8C368] dark:via-[#E8E4DD] dark:to-[#E8E4DD]">
              ca
            </span>
          </span>
          <span className="block text-[clamp(1.4rem,4.5vw,4rem)] font-light tracking-[0.22em] uppercase text-[#1A1614]/55 dark:text-[#E8E4DD]/50 mt-1">
            Ortiz Barrantes
          </span>
        </h1>

        {/* Separador */}
        <div className="flex items-center gap-2 animate-fade-in-up stagger-2 opacity-50">
          <span className="h-px w-8 bg-[#C8902E]/50 dark:bg-[#E8C368]/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
          <span className="h-px w-20 bg-gradient-to-r from-[#C8902E]/80 via-[#C8902E] to-[#C8902E]/80 dark:from-[#E8C368]/80 dark:via-[#E8C368] dark:to-[#E8C368]/80" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8902E]/70 dark:bg-[#E8C368]/70" />
          <span className="h-px w-8 bg-[#C8902E]/50 dark:bg-[#E8C368]/50" />
        </div>

        <HeroTypewriter />

        {/* Socials */}
        <div className="flex items-center gap-3 animate-fade-in-up stagger-3">
          {[
            { href: `mailto:${emailSocial?.href}`,   icon: <Mail className="h-4 w-4" />,     label: "Email"    },
            { href: githubSocial?.href   ?? "#",      icon: <Github className="h-4 w-4" />,   label: "GitHub"   },
            { href: linkedinSocial?.href ?? "#",      icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
          ].map((s) => (
            <a key={s.label} href={s.href}
              target={s.href?.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium backdrop-blur-md transition-all duration-300
                border-[#E6DFD0] bg-white/40 text-[#3D2E1C] hover:border-[#C8902E]/50 hover:bg-white/70 hover:shadow-[0_0_20px_rgba(200,144,46,0.15)]
                dark:border-[#232942] dark:bg-white/5 dark:text-[#D4CFC5] dark:hover:border-[#E8C368]/40 dark:hover:bg-white/10 dark:hover:shadow-[0_0_20px_rgba(232,195,104,0.12)]"
            >
              {s.icon}
              <span className="hidden sm:inline">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}