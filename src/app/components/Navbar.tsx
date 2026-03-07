import { useState, useEffect } from "react";
import { Menu, Sparkles } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.tsx";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.tsx";
import { SECTION_IDS } from "../../shared/lib/sectionIds";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button.tsx";

const navItems = [
  { label: "Inicio", href: `#${SECTION_IDS.hero}` },
  { label: "Educación", href: `#${SECTION_IDS.education}` },
  { label: "Experiencia", href: `#${SECTION_IDS.experience}` },
  { label: "Habilidades", href: `#${SECTION_IDS.skills}` },
  { label: "Idiomas", href: `#${SECTION_IDS.languages}` },
  { label: "Portafolio", href: `#${SECTION_IDS.portfolio}` },
  { label: "Contacto", href: `#${SECTION_IDS.contact}` },
] as const;

/**
 * Navbar principal.
 *
 * Se muestra al hacer scroll suficiente para no competir visualmente
 * con el hero inicial, y mantiene una apariencia consistente con
 * la estética general del portafolio.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.55;
    const onScroll = () => setVisible(window.scrollY > threshold);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        visible
          ? "translate-y-0 border-b border-border bg-background/85 backdrop-blur-xl shadow-[0_6px_24px_var(--glow)] opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="font-semibold text-foreground">Mi Portafolio</span>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-foreground hover:bg-accent/60"
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-64 border-l border-border bg-background/95 pt-10 backdrop-blur-xl"
            aria-describedby={undefined}
          >
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Menú de navegación</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>

            <nav>
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent/70 hover:text-accent-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}