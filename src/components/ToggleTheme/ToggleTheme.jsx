import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext"; 
import styles from "./ToggleTheme.module.css";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.toggleBtn} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}