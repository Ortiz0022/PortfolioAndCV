import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OrbitRingProps {
  sizeClassName: string;
  durationClassName: string;
  children: ReactNode;
  className?: string;
}

/**
 * Órbita circular reutilizable.
 * La rotación se aplica al contenedor completo y cada nodo se
 * contrarota para mantenerse legible.
 */
export default function OrbitRing({
  sizeClassName,
  durationClassName,
  children,
  className,
}: OrbitRingProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full border border-sky-300/30 dark:border-sky-400/20",
        "animate-spin",
        sizeClassName,
        durationClassName,
        className
      )}
      style={{ animationTimingFunction: "linear", animationIterationCount: "infinite" }}
    >
      {children}
    </div>
  );
}