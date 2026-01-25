import type { JSX } from "react";

type NavButtonSignProps = {
  onClick: () => void;
};

const NavButtonSign = ({ onClick }: NavButtonSignProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 rounded-full border-2 border-yapper-pink text-yapper-dark dark:text-yapper-light font-semibold hover:bg-yapper-pink/10 transition-colors cursor-pointer"
      type="button"
    >
      Sign in
    </button>
  );
};

export default NavButtonSign;
