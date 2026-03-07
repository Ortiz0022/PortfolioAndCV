import type { ExperienceItem } from "../../../shared/types/experience";

export const experience: ExperienceItem[] = [
  
  // Proyecto real / institucional: Cámara de Ganaderos de Hojancha
  {
    id: "proj-cgh",
    companyOrOrg: "Cámara de Ganaderos de Hojancha",
    role: "Desarrolladora Full Stack",
    startDate: "2024-03", 
    endDate: "2026-06",   
    responsibilities: [
      "Implementación de APIs REST seguras con JWT y base de datos optimizada para digitalizar gestión administrativa (usuarios, roles, solicitudes).",
      "Desarrollo de funcionalidades frontend y backend para presupuesto anual, ingresos/egresos y solicitudes públicas, centralizando la información.",
      "Liderazgo de 3 sprints bajo Scrum en equipo de 4 personas; documentación, pruebas y despliegue en VPS (Hostinger).",
    ],
    technologies: ["NestJS", "MySQL", "React", "Vite", "TanStack Query", "JWT", "Azure DevOps", "Hostinger VPS"],
  },
  {
    id: "exp-ucimed",
    companyOrOrg: "Universidad de Ciencias Médicas (UCIMED) – Sabana, San José",
    role: "Pasante de TI",
    startDate: "2022-10",
    endDate: "2022-12",
    responsibilities: [
      "Soporte técnico de hardware y software para personal administrativo y académico.",
      "Gestión de inventario tecnológico en Excel y resolución de incidencias.",
    ],
    technologies: ["Windows", "Office/Excel", "Soporte HW/SW"],
  }

];