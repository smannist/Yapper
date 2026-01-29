import MobileNavHeader from "@/components/MobileNavHeader";
import Backdrop from "@/components/Backdrop";
import LeftSidebar from "@/components/LeftSideBar";
import TimelinePostContainer from "@/components/TimelinePostContainer";
import ThemeToggler from "@/components/ThemeToggler";

import { useMobileSidebar } from "@/hooks";
import { APP_BASE_STYLES } from "@/consts/app";
import { BodyScrollLock } from "@/utils/bs";

const App = () => {
  const {
    isOpen: isMobileSidebarOpen,
    isDesktop,
    toggle,
    close,
  } = useMobileSidebar();

  return (
    <div className={APP_BASE_STYLES}>
      {!isDesktop && isMobileSidebarOpen ? <BodyScrollLock /> : null}
      {!isDesktop && <MobileNavHeader onToggle={toggle} />}
      <Backdrop open={!isDesktop && isMobileSidebarOpen} onDismiss={close} />
      <LeftSidebar isSidebarOpenMobile={isMobileSidebarOpen} />
      <ThemeToggler />
      <TimelinePostContainer />
    </div>
  );
};

export default App;
