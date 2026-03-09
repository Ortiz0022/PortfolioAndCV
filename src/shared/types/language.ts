export type LanguageLevel =
  | "basic"
  | "intermediate"
  | "advanced"
  | "native";

export interface LanguageItem {
  id: string;
  name: string; // "Español", "Inglés"
  level: LanguageLevel;
  band?: string; // "Nativo", "B2+", "A2"
  traits?: string[]; // ["Lectura", "Escritura", "Conversación"]
  notes?: string; // ej: "Intermedio (sin certificación)"
}