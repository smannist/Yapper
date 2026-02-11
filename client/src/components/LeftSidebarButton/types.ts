export type LeftSidebarButtonProps = {
  variant: "create" | "signIn" | "signOut";
  onClick: () => void;
};

export type VariantType = { label: string; styles: string };
