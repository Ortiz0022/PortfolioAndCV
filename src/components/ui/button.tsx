import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap",
    "rounded-xl text-sm font-medium",
    "transition-all duration-300 ease-out",
    "outline-none",
    "focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",

        destructive:
          "bg-destructive text-white hover:bg-destructive/90 " +
          "focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",

        outline:
          "border border-border bg-background/80 text-foreground shadow-sm " +
          "hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        link:
          "text-primary underline-offset-4 hover:underline",

        /* 
          Variante principal del proyecto:
          más sobria, con gradiente oscuro y elegante.
        */
        cosmic:
          [
            "border border-violet-500/20",
            "bg-gradient-to-r from-indigo-800 via-violet-700 to-fuchsia-700",
            "text-white shadow-md shadow-violet-950/20",
            "hover:brightness-105 hover:shadow-lg hover:shadow-violet-900/25",
            "active:scale-[0.98]",
          ].join(" "),

        /*
          Variante outline reutilizable:
          visible tanto sobre fondos claros como oscuros.
        */
        cosmicOutline:
          [
            "border border-slate-300/80",
            "bg-slate-900/5 text-slate-800",
            "hover:bg-violet-500/10 hover:border-violet-400/40 hover:text-slate-900",
            "dark:border-slate-700 dark:bg-slate-900/30 dark:text-slate-100",
            "dark:hover:bg-violet-500/15 dark:hover:border-violet-400/40 dark:hover:text-white",
          ].join(" "),

        /*
          Variante suave para acciones menos protagonistas.
        */
        glow:
          [
            "border border-indigo-300/30",
            "bg-gradient-to-r from-slate-700 via-indigo-700 to-violet-700",
            "text-white shadow-sm shadow-indigo-950/20",
            "hover:brightness-105 hover:shadow-md hover:shadow-violet-900/25",
            "active:scale-[0.98]",
          ].join(" "),
      },

      size: {
        default: "h-10 px-5 py-2.5",
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-lg px-3.5",
        lg: "h-11 rounded-xl px-6 text-sm",
        icon: "size-10 rounded-xl",
        "icon-xs": "size-7 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-11 rounded-xl",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };