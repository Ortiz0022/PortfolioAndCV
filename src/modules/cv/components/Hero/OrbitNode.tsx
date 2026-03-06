import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OrbitNodeProps {
  label: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
  colorClassName?: string;
}

export default function OrbitNode({
  label,
  href,
  icon,
  className,
  colorClassName,
}: OrbitNodeProps) {
  const content = (
    <div
      className={cn(
        // Forma circular de planeta
        "flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 text-[10px] font-semibold leading-tight text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110",
        "border-white/30 bg-white/80 text-slate-700",
        "dark:border-white/15 dark:bg-slate-900/80 dark:text-slate-100",
        colorClassName,
        className
      )}
    >
      {icon ? <span className="mb-0.5 text-sm">{icon}</span> : null}
      <span className="px-1 leading-tight">{label}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("#") ? undefined : "_blank"}
        rel={href.startsWith("#") ? undefined : "noreferrer"}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded-full"
      >
        {content}
      </a>
    );
  }

  return content;
}