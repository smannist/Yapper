import cn from "@/utils/cn";

import type { BackdropProps } from "./types";

const Backdrop = ({ open, onDismiss }: BackdropProps) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-40 desktop:hidden",
        "bg-black/50",
        "transition-opacity duration-300",
        open ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      onClick={onDismiss}
      aria-hidden={!open}
    />
  );
};

export default Backdrop;
