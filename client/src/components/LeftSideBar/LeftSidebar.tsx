import { useMediaQuery } from "@uidotdev/usehooks";

import YapperLogoContainer from "@/components/YapperLogoContainer";
import LeftSidebarButtonContainer from "@/components/LeftSideBarButtonContainer";
import cn from "@/utils/cn";
import { BASE_STYLES, MOBILE_TRANSLATE } from "./consts";

import type { LeftSidebarProps } from "./types";

const LeftSidebar = ({ isSidebarOpenMobile }: LeftSidebarProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const mobileState = isSidebarOpenMobile ? "open" : "closed";

  const handleCreateAccount = (): void => {
    console.log("Create account clicked.");
  };

  const handleSignIn = (): void => {
    console.log("Sign in clicked.");
  };

  return (
    <div
      className={cn(BASE_STYLES, MOBILE_TRANSLATE[mobileState])}
      aria-hidden={!isDesktop && !isSidebarOpenMobile}
    >
      <YapperLogoContainer size="large" />
      <LeftSidebarButtonContainer
        onCreateAccount={handleCreateAccount}
        onSignIn={handleSignIn}
      />
    </div>
  );
};

export default LeftSidebar;
