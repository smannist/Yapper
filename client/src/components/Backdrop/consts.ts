export const BASE_STYLES =
  "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 desktop:hidden";

export const BACKDROP_VISIBILITY: Record<"active" | "inactive", string> = {
  active: "opacity-100",
  inactive: "opacity-0 pointer-events-none",
};
