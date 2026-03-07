import type { Project } from "../../../shared/types/project";

export const projects: Project[] = [
  {
    id: "p-ganaderos-info",
    title: "Cámara de Ganaderos – Sistema Informativo",
    shortDescription:
      "Sitio web informativo para la difusión de servicios, eventos, preguntas frecuentes y formularios públicos.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "TanStack"],
    media: [
      {
        kind: "image",
        src: "/images/ganaderos.png",
        alt: "Vista del sitio informativo de la Cámara de Ganaderos de Hojancha",
      },
    ],
    links: [
      { label: "Sitio Web Público", href: "https://www.camaraganaderoshojancha.cloud/" },
      { label: "Frontend Informativo", href: "https://github.com/Ortiz0022/Informative_App_Front" },
      { label: "Backend", href: "https://github.com/Ortiz0022/App_Backend" },
    ],
  },
  {
    id: "p-ganaderos-admin",
    title: "Cámara de Ganaderos – Sistema Administrativo",
    shortDescription:
      "Panel administrativo para la gestión de usuarios, presupuesto anual, ingresos/egresos y solicitudes internas.",
    technologies: ["React", "TypeScript", "Vite", "NestJS", "MySQL", "TanStack", "JWT"],
    media: [
      {
        kind: "image",
        src: "/images/ganaderos-admin.png",
        alt: "Vista del panel administrativo del sistema de la Cámara de Ganaderos",
      },
    ],
    links: [
      { label: "Frontend Administrativo", href: "https://github.com/Ortiz0022/Administrative_App_Front" },
      { label: "Backend", href: "https://github.com/Ortiz0022/App_Backend" }
    ],
  },
  {
    id: "p-university",
    title: "University Management System",
    shortDescription:
      "Sistema web para gestionar información y procesos administrativos municipales.",
    technologies: ["React", "TypeScript", ".NET", "SQL Server"],
    media: [
      {
        kind: "image",
        src: "/images/university.png",
        alt: "Vista previa del sistema de gestión universitaria",
      },
    ],
    links: [{ label: "GitHub Frontend", href: "https://github.com/Ortiz0022/Universidad-IAFuturo-Front" },
      { label: "GitHub Backend", href: "https://github.com/Ortiz0022/Universidad-IAFuturo-Back" }
    ],
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
        src: "/images/stroop-game.png",
        alt: "Vista previa del juego de Stroop",
      },
    ],
    links: [{ label: "GitHub Frontend", href: "https://github.com/Ortiz0022/FrontStroopGame" },
      { label: "GitHub Backend", href: "https://github.com/Ortiz0022/StroopGameBack" }
    ],
  }
];