import { useQueryClient } from "@tanstack/react-query";

import cn from "@/utils/cn";
import {
  useSession,
  sessionQueryKey,
  clearSessionStorage,
} from "@/queries/session/session";

import YapperLogoContainer from "@/components/YapperLogoContainer";
import LeftSidebarForm from "@/components/LeftSidebarForm";
import LeftSidebarSignedIn from "@/components/LeftSidebarSignedIn";

import type { LeftSidebarProps } from "./types";

const LeftSidebar = ({ isDesktop, isSidebarOpenMobile }: LeftSidebarProps) => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const isSignedIn = session !== null;
  const user = session?.username ?? "";

  const handleSignOut = () => {
    clearSessionStorage();
    queryClient.setQueryData(sessionQueryKey(), null);
  };

  return (
    <div
      className={cn(
        "yapper-left-sidebar",
        !isDesktop &&
          (isSidebarOpenMobile
            ? "yapper-left-sidebar-mobile-open"
            : "yapper-left-sidebar-mobile-closed"),
      )}
      aria-hidden={!isDesktop && !isSidebarOpenMobile}
    >
      <YapperLogoContainer size="large" />
      <div className="mt-auto w-full">
        {isSignedIn ? (
          <LeftSidebarSignedIn user={user} onSignOut={handleSignOut} />
        ) : (
          <LeftSidebarForm />
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
