import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { experience } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <SectionLayout id="experience">
      <div>
        <h2>Experiencia</h2>

        {experience.length === 0 ? (
          <p>(Sin datos todavía)</p>
        ) : (
          <ul>
            {experience.map((x) => (
              <li key={x.id}>
                {x.companyOrOrg} — {x.role} ({x.startDate ?? "?"} -{" "}
                {x.endDate ?? "?"})
              </li>
            ))}
          </ul>
        )}
      </div>
    </SectionLayout>
  );
}