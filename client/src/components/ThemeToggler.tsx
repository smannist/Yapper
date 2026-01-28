import { Sun, Moon } from "lucide-react";

import cn from "../utils/cn";
import { toggleTheme } from "../utils/theme";

import type { JSX } from "react";

const BASE_BUTTON_STYLES =
  "fixed bottom-4 right-4 z-30 " +
  "flex items-center justify-center " +
  "p-3 rounded-full shadow-lg " +
  "border border-yapper-border " +
  "bg-yapper-surface " +
  "cursor-pointer transition-colors " +
  "hover:bg-yapper-hover";

const BASE_ICON_STYLES = "h-5 w-5";
const SUN_ICON_STYLES = "text-yapper-peach block dark:hidden";
const MOON_ICON_STYLES = "text-gray-400 hidden dark:block";

const ThemeToggler = (): JSX.Element => {
  return (
    <button
      onClick={toggleTheme}
      className={cn(BASE_BUTTON_STYLES)}
      aria-label="Toggle theme"
      type="button"
    >
      <Sun className={cn(BASE_ICON_STYLES, SUN_ICON_STYLES)} />
      <Moon className={cn(BASE_ICON_STYLES, MOON_ICON_STYLES)} />
    </button>
  );
};

export default ThemeToggler;
