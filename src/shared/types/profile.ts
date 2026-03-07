import type { SocialLink } from "./social";

export interface Profile {
  fullName: string;
  headlines: string[];
  location?: string;
  summary?: string;
  socials: SocialLink[];
  professional: string[];
}