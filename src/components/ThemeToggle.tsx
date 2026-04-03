import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      localStorage.setItem("portfolio-theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("portfolio-theme", "dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 p-3 rounded-full bg-secondary backdrop-blur border border-border text-foreground shadow-ambient hover:border-accent transition-all z-50 group flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-muted-foreground group-hover:text-amber-300 transition-colors" />
      ) : (
        <Moon size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
      )}
    </button>
  );
}
