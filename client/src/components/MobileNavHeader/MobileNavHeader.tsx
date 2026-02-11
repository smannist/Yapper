import { Menu } from "lucide-react";

import YapperLogoContainer from "@/components/YapperLogoContainer";
import cn from "@/utils/cn";

import type { MobileNavHeaderProps } from "./types";

const MobileNavHeader = ({ onToggle }: MobileNavHeaderProps) => {
  const handleClick = (): void => {
    console.log("Hamburger menu pressed.");
    onToggle();
  };

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-40 flex h-16 items-center px-4",
        "border-b border-yapper-border bg-yapper-surface",
        "transition-colors",
      )}
    >
      <button
        onClick={handleClick}
        className={cn(
          "rounded-lg p-2",
          "cursor-pointer transition-colors",
          "hover:bg-yapper-hover",
        )}
        aria-label="Toggle menu"
        type="button"
      >
        <Menu className={cn("h-6 w-6", "text-yapper-text")} />
      </button>
      <div className="ml-2">
        <YapperLogoContainer size="small" />
      </div>
    </div>
  );
};

export default MobileNavHeader;
