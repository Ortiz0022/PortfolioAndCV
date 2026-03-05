import SectionLayout from "../../../../shared/components/layout/SectionLayout";
import { education } from "../../data/education";

export default function EducationSection() {
  return (
    <SectionLayout id="education">
      <div>
        <h2>Educación</h2>

        {education.length === 0 ? (
          <p>(Sin datos todavía)</p>
        ) : (
          <ul>
            {education.map((e) => (
              <li key={e.id}>
                {e.institution} — {e.program} ({e.startDate ?? "?"} -{" "}
                {e.endDate ?? "?"})
              </li>
            ))}
          </ul>
        )}
      </div>
    </SectionLayout>
  );
}