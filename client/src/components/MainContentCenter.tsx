import type { JSX } from "react";

const MainContentCenter = (): JSX.Element => {
  return (
    <main className="min-h-screen pt-20 px-4 md:pt-6 md:pl-78 md:pr-6 flex items-center justify-center">
      <h1 className="text-small font-bold text-yapper-dark dark:text-yapper-light transition-colors">
        Yapper is coming to you soon...
      </h1>
    </main>
  );
};

export default MainContentCenter;
