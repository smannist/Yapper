import { useMediaQuery } from "@uidotdev/usehooks";
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

export const DESKTOP_MIN_WIDTH_PX = 1400;
export const DESKTOP_MEDIA_QUERY = `(min-width: ${DESKTOP_MIN_WIDTH_PX}px)`;

const LeftSidebar = ({ isSidebarOpenMobile }: LeftSidebarProps) => {
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
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
