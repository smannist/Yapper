import type { JSX } from "react";

type NavButtonCreateProps = {
  onClick: () => void;
};

const NavButtonCreate = ({ onClick }: NavButtonCreateProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 rounded-full bg-linear-to-r from-yapper-peach to-yapper-pink text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
      type="button"
    >
      Create account
    </button>
  );
};

export default NavButtonCreate;
