import CollapseHeader from "./CollapseHeader";
import NavButtonProvider from "./NavButtonProvider";
import { useState, useEffect } from "react";

import type { JSX } from "react";

const MD_BREAKPOINT = 768;

const MainNavLeft = (): JSX.Element => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MD_BREAKPOINT) {
        setIsMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCreateAccount = () => {
    console.log("Create account clicked.");
  };

  const handleSignIn = () => {
    console.log("Sign in clicked.");
  };

  return (
    <>
      <CollapseHeader onToggle={() => setIsMobileNavOpen((p) => !p)} />
      {/* Note: this will darken the background when the mobile nav is open, and allows
      the user to click outside of the nav to close it. */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileNavOpen(false)}
      />
      <nav
        className={`fixed left-0 top-0 h-screen w-72 flex flex-col p-6 overflow-y-auto md:overflow-visible border-r border-gray-200 dark:border-gray-700 bg-yapper-surface dark:bg-yapper-surface-dark z-50 transition-all duration-300 ease-in-out ${
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mb-8">
          <div
            role="img"
            aria-label="Yapper"
            className="w-64 aspect-4/2 bg-center bg-no-repeat bg-contain
             bg-[url('/img/yapper_white.webp')]
             dark:bg-[url('/img/yapper_dark.webp')]"
          />
        </div>
        <NavButtonProvider
          onCreateAccount={handleCreateAccount}
          onSignIn={handleSignIn}
        />
      </nav>
    </>
  );
};

export default MainNavLeft;
