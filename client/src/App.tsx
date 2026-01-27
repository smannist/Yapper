import clsx from "clsx";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import type { JSX } from "react";

import MobileNavHeader from "./components/MobileNavHeader";
import Backdrop from "./components/Backdrop";
import LeftSidebar from "./components/LeftSidebar";
import MainContentCenter from "./components/MainContentCenter";
import ThemeToggler from "./components/ThemeToggler";

const MD_BREAKPOINT = "(min-width: 768px)";

const App = (): JSX.Element => {
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState(false);
  const isDesktop = useMediaQuery(MD_BREAKPOINT);

  useEffect(() => {
    if (isDesktop) {
      // eslint-disable-next-line -- eslint-plugin-react-compiler
      setIsSidebarOpenMobile(false);
    }
  }, [isDesktop]);

  const handleToggleMobileNav = (): void => {
    setIsSidebarOpenMobile((prev) => !prev);
  };

  const handleCloseSidebarMobile = (): void => {
    setIsSidebarOpenMobile(false);
  };

  const handleCreateAccount = (): void => {
    console.log("Create account clicked.");
  };

  const handleSignIn = (): void => {
    console.log("Sign in clicked.");
  };

  return (
    <div
      className={clsx(
        "min-h-screen",
        "bg-yapper-surface dark:bg-yapper-surface-dark",
        "transition-colors",
      )}
    >
      {!isDesktop && <MobileNavHeader onToggle={handleToggleMobileNav} />}
      <Backdrop
        open={!isDesktop && isSidebarOpenMobile}
        onDismiss={handleCloseSidebarMobile}
      />
      <LeftSidebar
        isSidebarOpenMobile={isSidebarOpenMobile}
        onCreateAccount={handleCreateAccount}
        onSignIn={handleSignIn}
      />
      <ThemeToggler />
      <MainContentCenter />
    </div>
  );
};

export default App;
