import type { ReactNode } from "react";
import type { SectionId } from "@/shared/lib/sectionIds";
import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  id?: SectionId | string;
  children: ReactNode;
  className?: string;
}

/**
 * Layout base de sección.
 *
 * Responsabilidades:
 * - definir el anchor/id para navegación
 * - aplicar scroll offset para navbar fijo
 * - permitir estilos por sección sin forzar altura o padding global
 *
 * Importante:
 * No se define aquí ni max-width ni padding vertical grande,
 * para evitar espacios duplicados entre secciones.
 */
export default function SectionLayout({
  id,
  children,
  className,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24", className)}
    >
      {children}
    </section>
  );
}