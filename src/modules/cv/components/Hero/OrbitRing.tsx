// OrbitRing.tsx
import type { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface OrbitRingProps {
  sizeClassName?: string;
  durationClassName: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function OrbitRing({ sizeClassName, durationClassName, children, className, style }: OrbitRingProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full border border-slate-300/20 dark:border-slate-500/15 animate-spin",
        sizeClassName,
        durationClassName,
        className
      )}
      style={{ animationTimingFunction: "linear", animationIterationCount: "infinite", ...style }}
    >
      {children}
    </div>
  );
}