import { useEffect, useState } from "react";

const ROLES = [
  "Desarrolladora Full Stack",
  "Ingeniería en Sistemas",
  "Buscando práctica profesional",
];

export default function HeroTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <div className="h-8 flex items-center animate-fade-in-up stagger-2">
      <span className="text-base md:text-lg text-[#7A6B5A] dark:text-[#8A8598] font-mono tracking-wide">
        {"{ "}
        <span className="text-[#C8902E] dark:text-[#E8C368]">{displayed}</span>
        <span className="inline-block w-0.5 h-4 bg-[#C8902E] dark:bg-[#E8C368] ml-0.5 animate-pulse" />
        {" }"}
      </span>
    </div>
  );
}