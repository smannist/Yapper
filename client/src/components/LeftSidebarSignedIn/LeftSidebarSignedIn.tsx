import LeftSidebarButton from "@/components/LeftSidebarButton";

import {
  CONTAINER_STYLES,
  USERNAME_TEXT_STYLES,
  USER_TEXT_STYLES,
} from "./consts";

import type { LeftSidebarSignedInProps } from "./types";

const LeftSidebarSignedIn = ({ user, onSignOut }: LeftSidebarSignedInProps) => {
  const displayUser = user.trim();

  return (
    <div className={CONTAINER_STYLES}>
      <p className={USER_TEXT_STYLES}>
        Signed in as:{" "}
        <span className={USERNAME_TEXT_STYLES}>{displayUser}</span>
      </p>
      <LeftSidebarButton variant="signOut" onClick={onSignOut} />
    </div>
  );
};

export default LeftSidebarSignedIn;
