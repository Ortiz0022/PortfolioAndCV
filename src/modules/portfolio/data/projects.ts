import type { Project } from "../../../shared/types/project";

export const projects: Project[] = [
  {
    id: "p-university",
    title: "University Management System",
    shortDescription:
      "Sistema web para gestionar información y procesos administrativos municipales.",
    technologies: ["React", "TypeScript", ".NET", "SQL Server"],
    media: [
      {
        kind: "image",
        src: "src/assets/images/university.png",
        alt: "Vista previa del sistema de gestión universitaria",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Ortiz0022/Universidad-IAFuturo-Front" }],
  },
  {
    id: "p-ganaderos",
    title: "Cámara de Ganaderos",
    shortDescription:
      "Aplicación para registro y gestión de información de asociados y fincas.",
    technologies: ["React", "TypeScript", "NestJS", "MySQL"],
    media: [
      {
        kind: "image",
        src: "src/assets/images/ganaderos.png",
        alt: "Vista previa del sistema de Cámara de Ganaderos",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Ortiz0022/Informative_App_Front" }],
  },
  {
    id: "p-game",
    title: "Juego de Stroop",
    shortDescription:
      "Aplicación interactiva para entrenamiento cognitivo basado en el test de Stroop.",
    technologies: ["React", "TypeScript", "SignalR", "ASP.NET Core"],
    media: [
      {
        kind: "image",
        src: "src/assets/images/stroop-game.png",
        alt: "Vista previa del juego de Stroop",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Ortiz0022/FrontStroopGame" }],
  },
  {
    id: "p-game",
    title: "Juego de Stroop",
    shortDescription:
      "Aplicación interactiva para entrenamiento cognitivo basado en el test de Stroop.",
    technologies: ["React", "TypeScript", "SignalR", "ASP.NET Core"],
    media: [
      {
        kind: "image",
        src: "src/assets/images/stroop-game.png",
        alt: "Vista previa del juego de Stroop",
      },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Ortiz0022/FrontStroopGame" }],
  }
];