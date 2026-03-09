import type { LanguageItem } from "../../../shared/types/language";

export const languages: LanguageItem[] = [
  {
    id: "lang-es",
    name: "Español",
    level: "native",
    band: "Nativo",
    traits: ["Dominio total del idioma"],
    notes: "Lengua materna",
  },
  {
    id: "lang-en",
    name: "Inglés",
    level: "intermediate",
    band: "B2+",
    traits: ["Lectura", "Escritura", "Conversación", "Comprensión auditiva"],
    notes: "Certificación TOEIC · CCCN (12 módulos completados, 2024)",
  },
  {
    id: "lang-pt",
    name: "Portugués",
    level: "basic",
    band: "A2",
    traits: ["Bases", "Vocabulario", "Comunicación básica"],
    notes: "Nivel básico · Academia Europea (2025)",
  },
];