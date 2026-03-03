import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:opacity-90 transition"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}