import clsx from "clsx";
import type { JSX } from "react";

type BackdropProps = {
  open: boolean;
  onDismiss: () => void;
};

const Backdrop = ({ open, onDismiss }: BackdropProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-40",
        "bg-black/50",
        "transition-opacity duration-300",
        "md:hidden",
        open ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      onClick={onDismiss}
      aria-hidden={!open}
    />
  );
};

export default Backdrop;
