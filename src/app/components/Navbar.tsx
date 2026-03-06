// Navbar.tsx
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * 0.6;
    const onScroll = () => setVisible(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        visible
          ? "translate-y-0 border-b bg-background/95 backdrop-blur shadow-sm opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-semibold text-foreground">Mi Portafolio</span>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
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
              <VisuallyHidden><SheetTitle>Menú de navegación</SheetTitle></VisuallyHidden>
            </SheetHeader>
            <nav>
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
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