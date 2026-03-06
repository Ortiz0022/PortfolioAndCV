import { profile } from "@/modules/cv/data/profile";
import OrbitRing from "./OrbitRing";
import OrbitNode from "./OrbitNode";

const innerOrbitNodes = [
  {
    label: "GitHub",
    href: "https://github.com/Ortiz0022",
    positionClassName: "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
    colorClassName: "bg-blue-100/80 border-blue-300/50 text-blue-800 shadow-[0_0_16px_rgba(96,165,250,0.5)] dark:bg-blue-950/70 dark:text-blue-200",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/angelica-ortiz-barrantes/",
    positionClassName: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    colorClassName: "bg-purple-100/80 border-purple-300/50 text-purple-800 shadow-[0_0_16px_rgba(192,132,252,0.5)] dark:bg-purple-950/70 dark:text-purple-200",
  },
];

const outerOrbitNodes = [
  {
    label: "Educación",
    href: "#education",
    positionClassName: "absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
    colorClassName: "bg-orange-100/80 border-orange-300/50 text-orange-800 shadow-[0_0_16px_rgba(251,146,60,0.5)] dark:bg-orange-950/70 dark:text-orange-200",
  },
  {
    label: "Habilidades",
    href: "#skills",
    positionClassName: "absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
    colorClassName: "bg-yellow-100/80 border-yellow-300/50 text-yellow-800 shadow-[0_0_16px_rgba(250,204,21,0.5)] dark:bg-yellow-950/70 dark:text-yellow-200",
  },
  {
    label: "Portafolio",
    href: "#portfolio",
    positionClassName: "absolute left-[14%] top-[12%]",
    colorClassName: "bg-cyan-100/80 border-cyan-300/50 text-cyan-800 shadow-[0_0_16px_rgba(34,211,238,0.5)] dark:bg-cyan-950/70 dark:text-cyan-200",
  },
  {
    label: "Contacto",
    href: "#contact",
    positionClassName: "absolute bottom-[10%] right-[14%]",
    colorClassName: "bg-violet-100/80 border-violet-300/50 text-violet-800 shadow-[0_0_16px_rgba(168,85,247,0.5)] dark:bg-violet-950/70 dark:text-violet-200",
  },
];

export default function SolarHero() {
  return (
    <div className="relative flex h-[calc(100vh-57px)] items-center justify-center overflow-hidden">

      {/* Fondo atmosférico */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,_rgba(96,165,250,0.12),_transparent),radial-gradient(ellipse_40%_40%_at_50%_80%,_rgba(168,85,247,0.08),_transparent)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(circle,_rgba(148,163,184,0.3)_1px,_transparent_1px)] [background-size:32px_32px]" />

      {/* ── Capa de órbitas: cubre todo el hero, no bloquea clicks del texto ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[520px] w-[520px] items-center justify-center">

          {/* Órbita interna */}
          <OrbitRing
            sizeClassName="h-[240px] w-[240px]"
            durationClassName="[animation-duration:45s]"
          >
            <div className="relative h-full w-full">
              {innerOrbitNodes.map((node) => (
                <div
                  key={node.label}
                  className={`${node.positionClassName} pointer-events-auto animate-[spin_45s_linear_infinite_reverse]`}
                >
                  <OrbitNode label={node.label} href={node.href} colorClassName={node.colorClassName} />
                </div>
              ))}
            </div>
          </OrbitRing>

          {/* Órbita externa */}
          <OrbitRing
            sizeClassName="h-[460px] w-[460px]"
            durationClassName="[animation-duration:70s]"
          >
            <div className="relative h-full w-full">
              {outerOrbitNodes.map((node) => (
                <div
                  key={node.label}
                  className={`${node.positionClassName} pointer-events-auto animate-[spin_70s_linear_infinite_reverse]`}
                >
                  <OrbitNode label={node.label} href={node.href} colorClassName={node.colorClassName} />
                </div>
              ))}
            </div>
          </OrbitRing>

          {/* Sol central decorativo — sin texto */}
          <div className="absolute z-10 h-6 w-6 rounded-full bg-violet-400 shadow-[0_0_32px_8px_rgba(167,139,250,0.5)]" />
        </div>
      </div>

      {/* ── Capa de contenido: texto centrado sobre todo ── */}
      <div className="relative z-20 flex flex-col items-center gap-4 text-center px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
          {profile.location}
        </p>

        <h1 className="text-5xl font-bold leading-tight text-slate-900 sm:text-6xl md:text-7xl dark:text-white">
          {profile.fullName}
        </h1>

        <p className="text-lg font-medium text-slate-600 sm:text-xl dark:text-slate-300">
          {profile.headline}
        </p>

        <p className="max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {profile.summary}
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {profile.socials.map((social) => (
            <OrbitNode
              key={social.id}
              label={social.label}
              href={
                social.platform === "email"
                  ? `mailto:${social.href}`
                  : social.href
              }
              className="h-auto w-auto rounded-full px-4 py-2 text-sm border-slate-200 bg-white/70 text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}