import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { SECTION_IDS } from "../../../../shared/lib/sectionIds";
import { profile } from "../../data/profile";

export default function HeroSection() {
  return (
    <SectionLayout id={SECTION_IDS.hero}>
      <div>
        <h1>{profile.fullName}</h1>
        <p>{profile.headline}</p>

        {profile.location ? <p>{profile.location}</p> : null}
        {profile.summary ? <p>{profile.summary}</p> : null}

        <ul>
          {profile.socials.map((s) => (
            <li key={s.id}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}