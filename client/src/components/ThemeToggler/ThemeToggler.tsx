import { Sun, Moon } from "lucide-react";

import cn from "@/utils/cn";
import { toggleTheme } from "@/utils/theme";

import {
  BASE_BUTTON_STYLES,
  BASE_ICON_STYLES,
  SUN_ICON_STYLES,
  MOON_ICON_STYLES,
} from "./consts";

const ThemeToggler = () => {
  return (
    <button
      onClick={toggleTheme}
      className={BASE_BUTTON_STYLES}
      aria-label="Toggle theme"
      type="button"
    >
      <Sun className={cn(BASE_ICON_STYLES, SUN_ICON_STYLES)} />
      <Moon className={cn(BASE_ICON_STYLES, MOON_ICON_STYLES)} />
    </button>
  );
};

export default ThemeToggler;
