import cn from "@/utils/cn";

import { BUTTON_VARIANT_LABELS } from "./labels";

import type { LeftSidebarButtonProps } from "./types";

const LeftSidebarButton = ({ variant, onClick }: LeftSidebarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full rounded-full py-3",
        "font-semibold text-white",
        "bg-linear-to-r from-yapper-peach to-yapper-pink",
        "cursor-pointer transition-opacity",
        "hover:opacity-90",
      )}
      type="button"
    >
      {BUTTON_VARIANT_LABELS[variant]}
    </button>
  );
};

export default LeftSidebarButton;
