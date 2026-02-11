import { useQuery } from "@tanstack/react-query";
import { yapsQueryFn, yapsQueryKey } from "@/queries/yaps/yaps";

import cn from "@/utils/cn";
import getUrl from "@/utils/getUrl";
import TimelineYap from "@/components/TimelineYap";

const CACHE_TIME = 24 * 60 * 60 * 1000;

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
    <div className={cn("flex min-h-screen px-4 pt-20", "md:px-6 md:pt-6")}>
      <div className={cn("mx-auto w-full max-w-2xl space-y-6")}>
        <h1
          className={cn(
            "text-small font-bold text-yapper-text transition-colors",
          )}
        >
          Latest Yaps
        </h1>
        <div
          className={cn(
            "divide-y divide-yapper-border",
            "overflow-hidden rounded-2xl border border-yapper-border",
            "bg-yapper-surface shadow-sm",
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
