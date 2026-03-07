
export type PlanetPalette = {
  gradientDark: string;
  gradientLight: string;
  glowDark: string;
  glowLight: string;
  borderDark: string;
  borderLight: string;
  textDark: string;
  textLight: string;
};

export type HeroPlanet = {
  label: string;
  href: string;
  pos: { x: number; y: number };
  palette: PlanetPalette;
};