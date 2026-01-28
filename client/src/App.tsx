import cn from "@/utils/cn";

import MobileNavHeader from "@/components/MobileNavHeader";
import Backdrop from "@/components/Backdrop";
import LeftSidebar from "@/components/LeftSideBar";
import MainContentCenter from "@/components/MainContentCenter";
import ThemeToggler from "@/components/ThemeToggler";

import { useMobileSidebar } from "@/hooks/useMobileSidebar";

const BASE_STYLES = "min-h-screen bg-yapper-surface transition-colors";

const App = () => {
  const {
    isOpen: isMobileSidebarOpen,
    isDesktop,
    toggle,
    close,
  } = useMobileSidebar();

  return (
    <div className={cn(BASE_STYLES)}>
      {!isDesktop && <MobileNavHeader onToggle={toggle} />}
      <Backdrop open={!isDesktop && isMobileSidebarOpen} onDismiss={close} />
      <LeftSidebar isSidebarOpenMobile={isMobileSidebarOpen} />
      <ThemeToggler />
      <MainContentCenter />
    </div>
  );
};

export default App;
