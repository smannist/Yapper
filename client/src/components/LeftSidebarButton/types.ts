import type { ButtonHTMLAttributes, MouseEventHandler } from "react";

export type LeftSidebarButtonVariant = "signIn" | "signOut";

export type LeftSidebarButtonProps = {
  variant: LeftSidebarButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  className?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};
