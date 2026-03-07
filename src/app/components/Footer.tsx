import { Sparkles } from "lucide-react";
import { profile } from "../../modules/cv/data/profile";

/**
 * Footer global del sitio.
 *
 * Se mantiene simple, pero integrado visualmente al resto
 * del portafolio mediante borde, fondo translúcido y acentos.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-6 py-6 text-center">
        <div className="flex items-center gap-2 text-primary/80">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-mono uppercase tracking-[0.25em]">
            Portafolio personal
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {year} {profile.fullName}
        </p>
      </div>
    </footer>
  );
}