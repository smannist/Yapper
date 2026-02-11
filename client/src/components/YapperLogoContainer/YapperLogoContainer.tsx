import cn from "@/utils/cn";

import type { YapperLogoContainerProps } from "./types";

const YapperLogoContainer = ({ size }: YapperLogoContainerProps) => {
  return (
    <div
      role="img"
      aria-label="Yapper"
      className={cn(
        "yapper-logo",
        size === "small" ? "yapper-logo-small" : "yapper-logo-large",
      )}
    />
  );
};

export default YapperLogoContainer;
