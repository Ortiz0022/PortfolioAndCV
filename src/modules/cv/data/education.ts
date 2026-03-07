import type { EducationItem } from "../../../shared/types/education";

export const education: EducationItem[] = [
  {
    id: "edu-una-bach",
    institution: "Universidad Nacional de Costa Rica (UNA)",
    program: "Bachillerato en Ingeniería en Sistemas de Información",
    startDate: "2023",
    endDate: "2026",
    notes: [
      "Reconocimiento: Mejor promedio de la carrera (2023).",
      "En curso – Graduación estimada 2027."
    ],
  },
  {
    id: "edu-una-di",
    institution: "Universidad Nacional de Costa Rica (UNA)",
    program: "Diplomado en Programación de Aplicaciones Informáticas",
    startDate: "2023",
    endDate: "2025",
    notes: [
      "Formación práctica en CRUD con SQL/ORM, consumo de APIs (Swagger), control de versiones con Git y pruebas unitarias.",
    ],
  },
  {
    id: "edu-ctp",
    institution: "Colegio Técnico Profesional de Hojancha",
    program: "Técnico Medio en Informática Empresarial",
    startDate: "2020",
    endDate: "2022",
    notes: [
      "Ofimática, lógica de programación, redes básicas, mantenimiento y soporte.",
    ],
  },
];