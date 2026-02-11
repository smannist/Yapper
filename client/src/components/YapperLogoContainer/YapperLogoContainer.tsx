import cn from "@/utils/cn";

import type { YapperLogoContainerProps } from "./types";

const YapperLogoContainer = ({ size }: YapperLogoContainerProps) => {
  return (
    <div
      role="img"
      aria-label="Yapper"
      className={cn(
        "bg-contain bg-center bg-no-repeat",
        "bg-[url('/img/yapper_white.webp')] dark:bg-[url('/img/yapper_dark.webp')]",
        size === "small" ? "h-10 w-32" : "aspect-4/2 w-64",
      )}
    />
  );
};

export default YapperLogoContainer;
