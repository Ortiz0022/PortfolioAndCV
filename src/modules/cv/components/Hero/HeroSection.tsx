import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { profile } from "../../data/profile";

export default function HeroSection() {
  return (
    <SectionLayout id="hero">
      <div>
        <h1>{profile.fullName || "Tu Nombre"}</h1>
        <p>{profile.headline || "Tu headline / rol"}</p>
        {profile.location ? <p>{profile.location}</p> : null}
        {profile.summary ? <p>{profile.summary}</p> : null}

        <ul>
          {profile.socials.map((s) => (
            <li key={s.id}>
              {s.label}: {s.href}
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}