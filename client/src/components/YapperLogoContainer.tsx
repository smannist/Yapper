import clsx from "clsx";
import type { JSX } from "react";

type YapperLogoContainerProps = {
  size?: "small" | "large";
};

const sizeClasses = {
  small: "h-10 w-32",
  large: "w-64 aspect-[4/2]",
} as const;

const YapperLogoContainer = ({
  size = "large",
}: YapperLogoContainerProps): JSX.Element => {
  return (
    <div
      role="img"
      aria-label="Yapper"
      className={clsx(
        sizeClasses[size],
        "bg-center bg-no-repeat bg-contain",
        "bg-[url('/img/yapper_white.webp')]",
        "dark:bg-[url('/img/yapper_dark.webp')]",
      )}
    />
  );
};

export default YapperLogoContainer;
