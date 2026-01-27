import clsx from "clsx";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "../utils/theme";
import type { JSX } from "react";

const ThemeToggler = (): JSX.Element => {
  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "fixed bottom-4 right-4 z-30",
        "flex items-center justify-center",
        "p-3",
        "rounded-full shadow-lg",
        "border border-gray-200 dark:border-gray-700",
        "bg-white dark:bg-gray-800",
        "cursor-pointer",
        "transition-colors",
        "hover:bg-gray-100 dark:hover:bg-gray-700",
      )}
      aria-label="Toggle theme"
      type="button"
    >
      <Sun
        className={clsx("h-5 w-5", "text-yapper-peach", "block dark:hidden")}
      />
      <Moon className={clsx("h-5 w-5", "text-gray-400", "hidden dark:block")} />
    </button>
  );
};

export default ThemeToggler;
