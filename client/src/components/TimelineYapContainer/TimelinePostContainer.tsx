import { useQuery } from "@tanstack/react-query";
import { yapsQueryFn, yapsQueryKey } from "@/queries/yaps/yaps";

import cn from "@/utils/cn";
import getUrl from "@/utils/getUrl";
import TimelineYap from "@/components/TimelineYap";

import {
  BASE_CONTAINER_STYLES,
  BASE_HEADER_STYLES,
  TIMELINE_CONTAINER_STYLES,
  TIMELINE_SCROLL_AREA_STYLES,
  CACHE_TIME,
} from "./consts";

const TimelineYapContainer = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: yapsQueryKey(getUrl("/api/yaps")),
    queryFn: yapsQueryFn(getUrl("/api/yaps"), CACHE_TIME),
    staleTime: CACHE_TIME,
    gcTime: CACHE_TIME,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  return (
    <div className={BASE_CONTAINER_STYLES}>
      <div className={TIMELINE_CONTAINER_STYLES}>
        <h1 className={BASE_HEADER_STYLES}>Latest Yaps</h1>
        <div
          className={cn(
            "divide-y divide-yapper-border",
            TIMELINE_SCROLL_AREA_STYLES,
          )}
        >
          {isLoading ? (
            <div
              className="p-4 text-yapper-text transition-colors"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-center gap-2 text-sm">
                <span
                  className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-yapper-text/30 border-t-yapper-text"
                  aria-hidden="true"
                />
              </div>
            </div>
          ) : isError ? (
            <div className="p-4 text-yapper-text transition-colors">
              <div className="font-semibold">Failed to load posts.</div>
              <div className="mt-2 text-sm text-yapper-text/80">
                {error.message}
              </div>
            </div>
          ) : data.length === 0 ? (
            <div className="p-4 text-yapper-text/80 transition-colors">
              No one has yapped yet.
            </div>
          ) : (
            data.map((yap) => <TimelineYap key={yap.id} yap={yap} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineYapContainer;
