import { Menu } from "lucide-react";

import type { JSX } from "react";

type CollapseHeaderProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

const CollapseHeader = ({ onToggle }: CollapseHeaderProps): JSX.Element => {
  const handleClick = () => {
    console.log("Hamburger menu pressed.");
    onToggle();
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-4 md:hidden z-40">
      <button
        onClick={handleClick}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Toggle menu"
        type="button"
      >
        <Menu className="w-6 h-6 text-yapper-dark" />
      </button>
      <img src="/img/yapper_white.webp" alt="Yapper" className="h-10 ml-2" />
    </header>
  );
};

export default CollapseHeader;
