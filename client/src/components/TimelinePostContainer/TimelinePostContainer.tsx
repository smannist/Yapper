import { useQuery } from "@tanstack/react-query";
import { mockPostsQueryFn, mockPostsQueryKey } from "@/queries/mockPosts.query";

import cn from "@/utils/cn";
import TimelinePost from "@/components/TimelinePost";

import {
  BASE_CONTAINER_STYLES,
  BASE_HEADER_STYLES,
  TIMELINE_CONTAINER_STYLES,
  TIMELINE_SCROLL_AREA_STYLES,
  CACHE_TIME,
} from "./consts";

const TimelinePostContainer = () => {
  const mockPostsUrl = import.meta.env.DEV
    ? "/api/mock-posts"
    : `${(import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/+$/, "")}/api/mock-posts`;

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: mockPostsQueryKey(mockPostsUrl),
    queryFn: mockPostsQueryFn(mockPostsUrl, CACHE_TIME),
    // use local cache for now not really needed but really for testing purposes
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
                <span>
                  Loading posts... this will take a (long) while due to cold
                  starts.
                </span>
              </div>
            </div>
          ) : isError ? (
            <div className="p-4 text-yapper-text transition-colors">
              <div className="font-semibold">Failed to load posts.</div>
              <div className="mt-2 text-sm text-yapper-text/80">
                {error.message}
              </div>
            </div>
          ) : (
            data.map((post) => <TimelinePost key={post.id} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelinePostContainer;
