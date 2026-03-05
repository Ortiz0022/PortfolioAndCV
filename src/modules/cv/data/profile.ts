import type { SocialLink } from "../../../shared/types/social";

export interface Profile {
  fullName: string;
  headline: string; // Ej: "Estudiante de Ingeniería en Sistemas | Desarrolladora Full Stack"
  location?: string;
  summary?: string; // 2-4 líneas
  socials: SocialLink[];
}

export const profile: Profile = {
  fullName: "",
  headline: "",
  location: "",
  summary: "",
  socials: [],
};