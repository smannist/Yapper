export const BASE_STYLES =
  "fixed left-0 top-0 z-50 flex flex-col h-screen w-72 p-6 " +
  "overflow-y-auto desktop:overflow-visible overflow-x-hidden " +
  "border-r border-yapper-border bg-yapper-surface " +
  "transition-all duration-300 ease-in-out " +
  "desktop:translate-x-0";

export const MOBILE_TRANSLATE: Record<"open" | "closed", string> = {
  open: "translate-x-0",
  closed: "-translate-x-full",
};
