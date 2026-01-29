import { Menu } from "lucide-react";

import YapperLogoContainer from "@/components/YapperLogoContainer";

import {
  BASE_CONTAINER_STYLES,
  BASE_BUTTON_STYLES,
  BASE_ICON_STYLES,
} from "./consts";

import type { MobileNavHeaderProps } from "./types";

const MobileNavHeader = ({ onToggle }: MobileNavHeaderProps) => {
  const handleClick = (): void => {
    console.log("Hamburger menu pressed.");
    onToggle();
  };

  return (
    <div className={BASE_CONTAINER_STYLES}>
      <button
        onClick={handleClick}
        className={BASE_BUTTON_STYLES}
        aria-label="Toggle menu"
        type="button"
      >
        <Menu className={BASE_ICON_STYLES} />
      </button>
      <div className="ml-2">
        <YapperLogoContainer size="small" />
      </div>
    </div>
  );
};

export default MobileNavHeader;
