import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/shared/types/project";

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p>{project.shortDescription}</p>
        <p>
          <strong>Tecnologías:</strong> {project.technologies.join(", ")}
        </p>
      </CardContent>

      <CardFooter>
        <Button type="button" onClick={() => onOpenDetails(project)}>
          Más detalles
        </Button>
      </CardFooter>
    </Card>
  );
}