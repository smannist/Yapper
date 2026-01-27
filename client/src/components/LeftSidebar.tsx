import clsx from "clsx";
import type { JSX } from "react";

import YapperLogoContainer from "./YapperLogoContainer";
import LeftSidebarButtonContainer from "./LeftSidebarButtonContainer";

type LeftSidebarProps = {
  isSidebarOpenMobile: boolean;
  onCreateAccount: () => void;
  onSignIn: () => void;
};

const LeftSidebar = ({
  isSidebarOpenMobile,
  onCreateAccount,
  onSignIn,
}: LeftSidebarProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "fixed left-0 top-0 z-50",
        "flex flex-col",
        "h-screen w-72 p-6",
        "overflow-y-auto md:overflow-visible overflow-x-hidden",
        "border-r border-gray-200 dark:border-gray-700",
        "bg-yapper-surface dark:bg-yapper-surface-dark",
        "transition-all duration-300 ease-in-out",
        isSidebarOpenMobile ? "translate-x-0" : "-translate-x-full",
        "md:translate-x-0",
      )}
    >
      <YapperLogoContainer size="large" />
      <LeftSidebarButtonContainer
        onCreateAccount={onCreateAccount}
        onSignIn={onSignIn}
      />
    </div>
  );
};

export default LeftSidebar;
