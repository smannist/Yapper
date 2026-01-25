import CollapseHeader from "./CollapseHeader";
import NavButtonProvidor from "./NavButtonProvidor";
import { useState } from "react";

import type { JSX } from "react";

const MainNavLeft = (): JSX.Element => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleCreateAccount = () => {
    console.log("Create account clicked.");
  };

  const handleSignIn = () => {
    console.log("Sign in clicked.");
  };

  return (
    <>
      <CollapseHeader
        isCollapsed={isMobileNavOpen}
        onToggle={() => setIsMobileNavOpen((p) => !p)}
      />
      {/* Note: this will darken the background when the mobile nav is open, and allows
      the user to click outside of the nav to close it. */}
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}
      <nav
        className={`fixed left-0 top-0 h-screen w-72 flex flex-col p-6 border-r border-gray-200 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mb-8">
          <img
            src="/img/yapper_white.webp"
            alt="Yapper"
            className="w-64 h-auto"
          />
        </div>
        <NavButtonProvidor
          onCreateAccount={handleCreateAccount}
          onSignIn={handleSignIn}
        />
      </nav>
    </>
  );
};

export default MainNavLeft;
