import MobileNavHeader from "@/components/MobileNavHeader";
import Backdrop from "@/components/Backdrop";
import LeftSidebar from "@/components/LeftSideBar";
import TimelineYapContainer from "@/components/TimelineYapContainer";
import ThemeToggler from "@/components/ThemeToggler";

import { useMobileSidebar } from "@/hooks";
import { BodyScrollLock } from "@/utils/bs";

const App = () => {
  const {
    isOpen: isMobileSidebarOpen,
    isDesktop,
    toggle,
    close,
  } = useMobileSidebar();

  return (
    <div className="min-h-screen bg-yapper-surface transition-colors">
      {!isDesktop && isMobileSidebarOpen ? <BodyScrollLock /> : null}
      {!isDesktop && <MobileNavHeader onToggle={toggle} />}
      <Backdrop open={!isDesktop && isMobileSidebarOpen} onDismiss={close} />
      <LeftSidebar isSidebarOpenMobile={isMobileSidebarOpen} />
      <ThemeToggler />
      <TimelineYapContainer />
    </div>
  );
};

export default App;
