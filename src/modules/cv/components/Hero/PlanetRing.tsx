import OrbitNode from "./OrbitNode";

export function PlanetRing({
  planets,
  radiusFraction, // fracción de min(vw,vh), e.g. 0.38
  duration,
  small = false,
}: {
  planets: Array<{
    label: string;
    href?: string;
    angle: number;
    gradientDark: string;
    gradientLight: string;
    glowDark: string;
    glowLight: string;
    borderDark: string;
    borderLight: string;
  }>;
  radiusFraction: number;
  duration?: number;
  small?: boolean;
}) {
  const unit = `min(${radiusFraction * 200}vw, ${radiusFraction * 200}vh)`;
  const half = `min(${radiusFraction * 100}vw, ${radiusFraction * 100}vh)`;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: unit,
        height: unit,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Anillo decorativo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: "1px solid rgba(200,144,46,0.10)" }}
      />

      {/* Planetas fijos */}
      {planets.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180;
        const x = 50 + 50 * Math.cos(rad);
        const y = 50 + 50 * Math.sin(rad);
        const delay = `${(i * 0.55).toFixed(2)}s`;

        return (
          <div
            key={i}
            className="pointer-events-auto absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <OrbitNode
              label={p.label}
              href={p.href}
              small={small}
              pulseDelay={delay}
              planetStyle={{
                gradientDark: p.gradientDark,
                gradientLight: p.gradientLight,
                glowDark: p.glowDark,
                glowLight: p.glowLight,
                borderDark: p.borderDark,
                borderLight: p.borderLight,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}