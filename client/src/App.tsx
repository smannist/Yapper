import MainNavLeft from "./components/MainNavLeft";
import MainContentCenter from "./components/MainContentCenter";
import ThemeToggler from "./components/ThemeToggler.tsx";

import type { JSX } from "react";

const App = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-yapper-bg dark:bg-yapper-bg-dark transition-colors">
      <ThemeToggler />
      <MainNavLeft />
      <MainContentCenter />
    </div>
  );
};

export default App;
