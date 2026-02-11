import cn from "@/utils/cn";

import { BUTTON_VARIANT_LABELS } from "./labels";

import type { LeftSidebarButtonProps } from "./types";

const LeftSidebarButton = ({ variant, onClick }: LeftSidebarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn("yapper-signature-cta")}
      type="button"
    >
      {BUTTON_VARIANT_LABELS[variant]}
    </button>
  );
};

export default LeftSidebarButton;
