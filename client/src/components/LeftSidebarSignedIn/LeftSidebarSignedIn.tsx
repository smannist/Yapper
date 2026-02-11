import LeftSidebarButton from "@/components/LeftSidebarButton";
import cn from "@/utils/cn";

import type { LeftSidebarSignedInProps } from "./types";

const LeftSidebarSignedIn = ({ user, onSignOut }: LeftSidebarSignedInProps) => {
  const displayUser = user.trim();

  return (
    <div className={cn("space-y-2")}>
      <p className={cn("text-center text-sm text-yapper-text/80")}>
        Signed in as:{" "}
        <span className={cn("font-semibold text-yapper-text")}>
          {displayUser}
        </span>
      </p>
      <LeftSidebarButton variant="signOut" onClick={onSignOut} />
    </div>
  );
};

export default LeftSidebarSignedIn;
