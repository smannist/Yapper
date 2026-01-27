import clsx from "clsx";
import type { JSX } from "react";

type LeftSidebarButtonCreateProps = {
  onClick: () => void;
};

const LeftSidebarButtonCreate = ({
  onClick,
}: LeftSidebarButtonCreateProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full py-3",
        "rounded-full",
        "bg-linear-to-r from-yapper-peach to-yapper-pink",
        "font-semibold text-white",
        "cursor-pointer",
        "transition-opacity",
        "hover:opacity-90",
      )}
      type="button"
    >
      Create account
    </button>
  );
};

export default LeftSidebarButtonCreate;
