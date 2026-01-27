import clsx from "clsx";
import type { JSX } from "react";

type LeftSidebarButtonSignInProps = {
  onClick: () => void;
};

const LeftSidebarButtonSignIn = ({
  onClick,
}: LeftSidebarButtonSignInProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full py-3",
        "rounded-full",
        "border-2 border-yapper-pink",
        "font-semibold text-yapper-dark dark:text-yapper-light",
        "cursor-pointer",
        "transition-colors",
        "hover:bg-yapper-pink/10",
      )}
      type="button"
    >
      Sign in
    </button>
  );
};

export default LeftSidebarButtonSignIn;
