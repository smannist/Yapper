import cn from "@/utils/cn";

import { BUTTON_VARIANT_LABELS } from "./labels";

import type { LeftSidebarButtonProps } from "./types";

const LeftSidebarButton = ({
  variant,
  onClick,
  label,
  className,
  disabled = false,
  type = "button",
}: LeftSidebarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn("yapper-signature-cta", className)}
      type={type}
      disabled={disabled}
    >
      {label ?? BUTTON_VARIANT_LABELS[variant]}
    </button>
  );
};

export default LeftSidebarButton;
