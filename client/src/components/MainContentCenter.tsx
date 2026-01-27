import clsx from "clsx";
import type { JSX } from "react";

const MainContentCenter = (): JSX.Element => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "min-h-screen",
        "px-4 pt-20",
        "md:pl-78 md:pr-6 md:pt-6",
      )}
    >
      <h1
        className={clsx(
          "font-bold text-small",
          "text-yapper-dark dark:text-yapper-light",
          "transition-colors",
        )}
      >
        Yapper is coming to you soon...
      </h1>
    </div>
  );
};

export default MainContentCenter;
