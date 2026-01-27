import clsx from "clsx";
import { Menu } from "lucide-react";
import type { JSX } from "react";

import YapperLogoContainer from "./YapperLogoContainer";

type MobileNavHeaderProps = {
  onToggle: () => void;
};

const MobileNavHeader = ({ onToggle }: MobileNavHeaderProps): JSX.Element => {
  const handleClick = (): void => {
    console.log("Hamburger menu pressed.");
    onToggle();
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-40",
        "flex items-center",
        "h-16 px-4",
        "border-b border-gray-200 dark:border-gray-700",
        "bg-yapper-surface dark:bg-yapper-surface-dark",
        "transition-colors",
      )}
    >
      <button
        onClick={handleClick}
        className={clsx(
          "p-2",
          "rounded-lg",
          "cursor-pointer",
          "transition-colors",
          "hover:bg-gray-100 dark:hover:bg-gray-700",
        )}
        aria-label="Toggle menu"
        type="button"
      >
        <Menu
          className={clsx("h-6 w-6", "text-yapper-dark dark:text-yapper-light")}
        />
      </button>
      <div className="ml-2">
        <YapperLogoContainer size="small" />
      </div>
    </header>
  );
};

export default MobileNavHeader;
