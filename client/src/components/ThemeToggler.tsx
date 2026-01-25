import { Lightbulb, LightbulbOff } from "lucide-react";

import type { JSX } from "react";

const STORAGE_KEY = "yapper-theme";

const toggleTheme = (): void => {
  const root = document.documentElement;
  const isDarkMode = root.classList.toggle("dark");
  localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
};

const ThemeToggler = (): JSX.Element => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-3 right-4 md:top-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer shadow-md"
      aria-label="Toggle theme"
      type="button"
    >
      <Lightbulb className="w-6 h-6 text-yapper-peach block dark:hidden" />
      <LightbulbOff className="w-6 h-6 text-gray-400 hidden dark:block" />
    </button>
  );
};

export default ThemeToggler;
