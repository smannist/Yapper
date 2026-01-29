import { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

import { DESKTOP_MEDIA_QUERY } from "@/consts/breakpoints";

import type { UseMobileSidebarReturn } from "./types";

export const useMobileSidebar = (): UseMobileSidebarReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  useEffect(() => {
    if (isDesktop) {
      // eslint-disable-next-line -- eslint-plugin-react-compiler
      setIsOpen(false);
    }
  }, [isDesktop]);

  const toggle = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback((): void => {
    setIsOpen(false);
  }, []);

  return { isOpen, isDesktop, toggle, close };
};
