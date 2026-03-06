import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button onClick={toggle} aria-label={dark ? "Modo claro" : "Modo oscuro"}
      className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 hover:scale-110"
      style={{
        border: dark ? "1px solid rgba(232,195,104,0.3)" : "1px solid rgba(200,144,46,0.25)",
        background: dark ? "rgba(17,24,39,0.9)" : "rgba(255,253,247,0.9)",
        boxShadow: dark
          ? "0 0 20px rgba(232,195,104,0.15), 0 4px 16px rgba(0,0,0,0.3)"
          : "0 0 20px rgba(200,144,46,0.12), 0 4px 16px rgba(0,0,0,0.08)",
        backdropFilter: "blur(12px)",
      }}>

      {/* Sol */}
      <svg viewBox="0 0 24 24" fill="none" stroke="#C8902E" strokeWidth="2"
        className={`absolute h-5 w-5 transition-all duration-500 ${dark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      {/* Luna */}
      <svg viewBox="0 0 24 24" fill="#E8C368"
        className={`absolute h-5 w-5 transition-all duration-500 ${dark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}>
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>

      {/* Anillo punteado giratorio */}
      <span className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite]"
        style={{ border: dark ? "1px dashed rgba(232,195,104,0.25)" : "1px dashed rgba(200,144,46,0.2)" }} />
    </button>
  );
}