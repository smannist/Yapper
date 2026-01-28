import cn from "../utils/cn";

import type { JSX } from "react";

type YapperLogoContainerProps = {
  size: "small" | "large";
};

const BASE_STYLES =
  "bg-center bg-no-repeat bg-contain " +
  "bg-[url('/img/yapper_white.webp')] " +
  "dark:bg-[url('/img/yapper_dark.webp')]";

const LOGO_SIZE_STYLES: Record<YapperLogoContainerProps["size"], string> = {
  small: "h-10 w-32",
  large: "w-64 aspect-[4/2]",
};

const YapperLogoContainer = ({
  size,
}: YapperLogoContainerProps): JSX.Element => {
  return (
    <div
      role="img"
      aria-label="Yapper"
      className={cn(BASE_STYLES, LOGO_SIZE_STYLES[size])}
    />
  );
};

export default YapperLogoContainer;
