import type { ReactNode } from "react";
import type { SectionId } from "@/shared/lib/sectionIds";
import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  id?: SectionId;
  children: ReactNode;
  className?: string;
}

export default function SectionLayout({
  id,
  children,
  className,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn("min-h-screen px-6 py-16", className)}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}