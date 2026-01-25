import { Menu } from "lucide-react";

import type { JSX } from "react";

type CollapseHeaderProps = {
  onToggle: () => void;
};

const CollapseHeader = ({ onToggle }: CollapseHeaderProps): JSX.Element => {
  const handleClick = () => {
    console.log("Hamburger menu pressed.");
    onToggle();
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-yapper-surface dark:bg-yapper-surface-dark border-b border-gray-200 dark:border-gray-700 flex items-center px-4 md:hidden z-40 transition-colors">
      <button
        onClick={handleClick}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
        aria-label="Toggle menu"
        type="button"
      >
        <Menu className="w-6 h-6 text-yapper-dark dark:text-yapper-light" />
      </button>
      <div
        role="img"
        aria-label="Yapper"
        className="h-10 w-32 ml-2 bg-center bg-no-repeat bg-contain
             bg-[url('/img/yapper_white.webp')]
             dark:bg-[url('/img/yapper_dark.webp')]"
      />
    </header>
  );
};

export default CollapseHeader;
