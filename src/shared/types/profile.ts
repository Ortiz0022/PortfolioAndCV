import type { SocialLink } from "./social";

export interface Profile {
  fullName: string;
  headline: string;
  location?: string;
  summary?: string;
  socials: SocialLink[];
}