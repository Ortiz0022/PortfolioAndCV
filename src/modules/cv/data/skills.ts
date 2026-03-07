import type { SkillItem } from "../../../shared/types/skill";

export const skills: SkillItem[] = [
  // Frontend
  { id: "s-react", name: "React", level: "intermediate", category: "Frontend" },
  { id: "s-ts", name: "TypeScript", level: "intermediate", category: "Frontend" },
  { id: "s-js", name: "JavaScript", level: "intermediate", category: "Frontend" },
  { id: "s-tailwind", name: "TailwindCSS", level: "intermediate", category: "Frontend" },
  { id: "s-vite", name: "Vite", level: "intermediate", category: "Frontend" },
  { id: "s-tanstack", name: "TanStack", level: "intermediate", category: "Frontend" },

  // Backend
  { id: "s-dotnet", name: ".NET (C#)", level: "intermediate", category: "Backend" },
  { id: "s-csharp", name: "C#", level: "intermediate", category: "Backend" },
  { id: "s-cpp", name: "C++", level: "intermediate", category: "Backend" },
  { id: "s-node", name: "Node.js", level: "intermediate", category: "Backend" },
  { id: "s-nest", name: "NestJS", level: "intermediate", category: "Backend" },
  { id: "s-signalr", name: "SignalR", level: "basic", category: "Backend" },

  // Data
  { id: "s-sqlserver", name: "SQL Server", level: "intermediate", category: "Database" },
  { id: "s-mysql", name: "MySQL", level: "intermediate", category: "Database" },
  { id: "s-etl", name: "ETL", level: "basic", category: "Database" },
  { id: "s-datamart", name: "Data Mart", level: "basic", category: "Database" },

  // Tools
  { id: "s-git", name: "Git/GitHub", level: "intermediate", category: "Tools" },
  { id: "s-azdo", name: "Azure DevOps", level: "intermediate", category: "Tools" },
  { id: "s-swagger", name: "Swagger/OpenAPI", level: "intermediate", category: "Tools" },
  { id: "s-hostinger", name: "Hostinger VPS", level: "basic", category: "Tools" },
];