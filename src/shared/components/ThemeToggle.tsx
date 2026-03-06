import { useTheme } from "@/shared/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const dark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Modo claro" : "Modo oscuro"}
      className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-md transition-all duration-300 hover:scale-105"
    >
      {/* Sol */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className={`absolute h-5 w-5 text-primary transition-all duration-500 ${
          dark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* Luna */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`absolute h-5 w-5 text-primary transition-all duration-500 ${
          dark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
      >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>

      <span className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_10s_linear_infinite]" />
    </button>
  );
}