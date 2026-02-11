import { useMediaQuery } from "@uidotdev/usehooks";
import { useQueryClient } from "@tanstack/react-query";

import cn from "@/utils/cn";
import {
  useSession,
  sessionQueryKey,
  clearSessionStorage,
} from "@/queries/session/session";

import YapperLogoContainer from "@/components/YapperLogoContainer";
import LeftSidebarAuthForm from "@/components/LeftSidebarForm";
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
        "fixed left-0 top-0 z-50 flex h-dvh w-72 flex-col",
        "overflow-x-hidden overflow-y-hidden overscroll-contain touch-pan-y [-webkit-overflow-scrolling:touch]",
        "border-r border-yapper-border bg-yapper-surface p-6",
        "transition-all duration-300 ease-in-out",
        "desktop:h-screen desktop:translate-x-0 desktop:overflow-visible",
        isSidebarOpenMobile
          ? "max-h-dvh translate-x-0 overflow-y-auto"
          : "-translate-x-full overflow-y-hidden",
      )}
      aria-hidden={!isDesktop && !isSidebarOpenMobile}
    >
      <YapperLogoContainer size="large" />
      <div className="mt-auto w-full">
        {isSignedIn ? (
          <LeftSidebarSignedIn user={user} onSignOut={handleSignOut} />
        ) : (
          <LeftSidebarAuthForm />
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
