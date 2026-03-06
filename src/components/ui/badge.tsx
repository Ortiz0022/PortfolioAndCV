import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center rounded-full border px-3 py-1",
    "text-xs font-medium transition-colors",
    "whitespace-nowrap",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",

        secondary:
          "border-transparent bg-secondary text-secondary-foreground",

        outline:
          "border-border text-foreground",

        /*
          Badge suave para tecnologías:
          discreto, legible y útil tanto en cards como en modal.
        */
        tech:
          [
            "border-white/10 bg-white/12 text-white",
            "backdrop-blur-sm",
          ].join(" "),

        /*
          Variante clara para usar sobre fondos claros en el modal.
        */
        techLight:
          [
            "border-slate-200 bg-slate-100 text-slate-700",
            "hover:bg-slate-200/80",
          ].join(" "),

        /*
          Variante astral suave, menos obvia que un gradiente fuerte.
        */
        cosmic:
          [
            "border-violet-300/20 bg-violet-500/10 text-violet-100",
            "backdrop-blur-sm",
          ].join(" "),
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };