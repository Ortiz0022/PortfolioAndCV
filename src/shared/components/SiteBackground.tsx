import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

/**
 * Fondo global del sitio.
 *
 * Objetivo:
 * - mantener una atmósfera galáctica consistente en todas las secciones
 * - añadir movimiento sutil con scroll
 * - aportar estrellas, sparkles, orbes y órbitas suaves
 *
 * Importante:
 * Este fondo debe vivir detrás de todo el contenido.
 * Por eso las secciones principales deben evitar fondos sólidos opacos.
 */
export default function SiteBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: 180 }, (_, i) => ({
        id: i,
        top: `${(i * 37 + 11) % 100}%`,
        left: `${(i * 61 + 7) % 100}%`,
        size: i % 12 === 0 ? 3 : i % 5 === 0 ? 2 : 1,
        opacity: i % 10 === 0 ? 0.95 : i % 4 === 0 ? 0.7 : 0.45,
        duration: `${2 + (i % 5)}s`,
        delay: `${(i * 0.27) % 6}s`,
        color: [
          "rgba(255,255,255,0.95)",
          "rgba(232,195,104,0.9)",
          "rgba(167,139,250,0.85)",
          "rgba(103,232,249,0.85)",
          "rgba(255,255,255,0.8)",
        ][i % 5],
      })),
    []
  );

  const sparkles = [
    { top: "9%", left: "14%", size: 18, color: "#E8C368", delay: "0s" },
    { top: "14%", left: "69%", size: 14, color: "#a78bfa", delay: "1s" },
    { top: "31%", left: "87%", size: 16, color: "#67e8f9", delay: "0.6s" },
    { top: "60%", left: "10%", size: 14, color: "#f9a8d4", delay: "1.8s" },
    { top: "74%", left: "81%", size: 16, color: "#86efac", delay: "0.9s" },
    { top: "87%", left: "23%", size: 12, color: "#E8C368", delay: "1.4s" },
  ];

  const floatingOrbs = [
    {
      top: "10%",
      right: "-4rem",
      size: 180,
      translate: scrollY * 0.08,
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(232,195,104,0.9), rgba(200,144,46,0.65) 65%, rgba(146,64,14,0.5))",
      ring: true,
    },
    {
      top: "35%",
      left: "-2.5rem",
      size: 130,
      translate: scrollY * -0.06,
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(167,139,250,0.85), rgba(123,140,222,0.65) 65%, rgba(74,88,153,0.5))",
      ring: false,
    },
    {
      bottom: "15%",
      right: "6%",
      size: 96,
      translate: scrollY * -0.04,
      gradient:
        "radial-gradient(circle at 35% 35%, rgba(212,160,160,0.82), rgba(155,107,107,0.62) 65%, rgba(107,67,67,0.48))",
      ring: false,
    },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Nebulosas / blobs */}
      <div className="absolute inset-0">
        <div
          className="absolute left-[8%] top-[10%] h-[30rem] w-[30rem] rounded-full blur-[130px] opacity-[0.12] dark:opacity-[0.08]"
          style={{ background: "#7B8CDE" }}
        />
        <div
          className="absolute bottom-[10%] right-[8%] h-[26rem] w-[26rem] rounded-full blur-[120px] opacity-[0.12] dark:opacity-[0.08]"
          style={{ background: "#C8902E" }}
        />
        <div
          className="absolute left-[46%] top-[36%] h-[18rem] w-[18rem] rounded-full blur-[100px] opacity-[0.08] dark:opacity-[0.06]"
          style={{ background: "#D4A0A0" }}
        />
      </div>

      {/* Órbitas decorativas suaves */}
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 dark:border-primary/8" />
      <div className="absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/8 dark:border-primary/6" />

      {/* Estrellas */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-pulse"
            style={
              {
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                backgroundColor: star.color,
                boxShadow:
                  star.size >= 2 ? `0 0 10px ${star.color}` : undefined,
                animationDuration: star.duration,
                animationDelay: star.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Sparkles grandes */}
      <div className="absolute inset-0">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={
              {
                top: sparkle.top,
                left: sparkle.left,
                "--delay": sparkle.delay,
                "--duration": "3.2s",
              } as CSSProperties
            }
          >
            <Sparkle size={sparkle.size} color={sparkle.color} />
          </div>
        ))}
      </div>

      {/* Orbes flotantes estilo v0 */}
      {floatingOrbs.map((orb, i) => (
        <div
          key={i}
          className="absolute opacity-[0.18] dark:opacity-[0.12]"
          style={{
            top: "top" in orb ? orb.top : undefined,
            bottom: "bottom" in orb ? orb.bottom : undefined,
            left: "left" in orb ? orb.left : undefined,
            right: "right" in orb ? orb.right : undefined,
            transform: `translateY(${orb.translate}px)`,
            transition: "transform 0.2s linear",
          }}
        >
          <svg
            width={orb.size}
            height={orb.size}
            viewBox={`0 0 ${orb.size} ${orb.size}`}
            fill="none"
          >
            <circle
              cx={orb.size / 2}
              cy={orb.size / 2}
              r={orb.size * 0.22}
              fill={orb.gradient}
            />
            {orb.ring ? (
              <>
                <ellipse
                  cx={orb.size / 2}
                  cy={orb.size / 2}
                  rx={orb.size * 0.4}
                  ry={orb.size * 0.09}
                  stroke="rgba(232,195,104,0.45)"
                  strokeWidth="2"
                  fill="none"
                  transform={`rotate(-15 ${orb.size / 2} ${orb.size / 2})`}
                />
                <ellipse
                  cx={orb.size / 2}
                  cy={orb.size / 2}
                  rx={orb.size * 0.34}
                  ry={orb.size * 0.065}
                  stroke="rgba(232,195,104,0.25)"
                  strokeWidth="1.2"
                  fill="none"
                  transform={`rotate(-15 ${orb.size / 2} ${orb.size / 2})`}
                />
              </>
            ) : null}
          </svg>
        </div>
      ))}
    </div>
  );
}

function Sparkle({
  size = 16,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color}>
      <path d="M8 0 L8.8 7.2 L16 8 L8.8 8.8 L8 16 L7.2 8.8 L0 8 L7.2 7.2 Z" />
    </svg>
  );
}