import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  NavigationMenu, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SECTION_IDS } from "../../shared/lib/sectionIds";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: `#${SECTION_IDS.hero}` },
  { label: "Educación", href: `#${SECTION_IDS.education}` },
  { label: "Experiencia", href: `#${SECTION_IDS.experience}` },
  { label: "Habilidades", href: `#${SECTION_IDS.skills}` },
  { label: "Idiomas", href: `#${SECTION_IDS.languages}` },
  { label: "Portafolio", href: `#${SECTION_IDS.portfolio}` },
  { label: "Contacto", href: `#${SECTION_IDS.contact}` },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span
          className={cn(
            "font-semibold transition-colors duration-300",
            scrolled ? "text-foreground" : "text-slate-800 dark:text-white"
          )}
        >
          Mi Portafolio
        </span>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    !scrolled && "bg-transparent hover:bg-white/20 dark:hover:bg-white/10"
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
          <SheetContent side="right" className="w-60 pt-10" aria-describedby={undefined}>
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Menú de navegación</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>
            <nav>
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    
                      href={item.href}
                      <a
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
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