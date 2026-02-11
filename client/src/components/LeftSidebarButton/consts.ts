import type { LeftSidebarButtonProps, VariantType } from "./types";

export const BASE_STYLES =
  "w-full py-3 rounded-full font-semibold cursor-pointer transition-colors transition-opacity";

export const VARIANTS = {
  create: {
    label: "Create account",
    styles:
      "bg-gradient-to-r from-yapper-peach to-yapper-pink text-white hover:opacity-90",
  },
  signIn: {
    label: "Sign in",
    styles:
      "bg-gradient-to-r from-yapper-peach to-yapper-pink text-white hover:opacity-90",
  },
  signOut: {
    label: "Sign out",
    styles:
      "bg-gradient-to-r from-yapper-peach to-yapper-pink text-white hover:opacity-90",
  },
} satisfies Record<LeftSidebarButtonProps["variant"], VariantType>;
