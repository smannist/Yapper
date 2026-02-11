import { Sun, Moon } from "lucide-react";

import cn from "@/utils/cn";
import { toggleTheme } from "@/utils/theme";

const ThemeToggler = () => {
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-4 right-4 z-30 flex items-center justify-center",
        "rounded-full p-3 shadow-lg",
        "yapper-surface-panel yapper-hoverable-surface",
      )}
      aria-label="Toggle theme"
      type="button"
    >
      <Sun className={cn("h-5 w-5", "block text-yapper-peach dark:hidden")} />
      <Moon className={cn("h-5 w-5", "hidden text-gray-400 dark:block")} />
    </button>
  );
};

export default ThemeToggler;
