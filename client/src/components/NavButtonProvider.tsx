import type { JSX } from "react";
import NavButtonCreate from "./NavButtonCreate";
import NavButtonSign from "./NavButtonSign";

type NavButtonProviderProps = {
  onCreateAccount: () => void;
  onSignIn: () => void;
};

const NavButtonProvider = ({
  onCreateAccount,
  onSignIn,
}: NavButtonProviderProps): JSX.Element => {
  return (
    <>
      <div className="flex-1" />
      <div className="space-y-3">
        <NavButtonCreate onClick={onCreateAccount} />
        <NavButtonSign onClick={onSignIn} />
      </div>
    </>
  );
};

export default NavButtonProvider;
