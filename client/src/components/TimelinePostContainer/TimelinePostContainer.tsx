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
    queryFn: mockPostsQueryFn(mockPostsUrl),
    staleTime: CACHE_TIME, // use cache for now since it's just static mocked data at db change later!
    gcTime: CACHE_TIME,
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
          {isError && (
            <div className="p-4 text-yapper-text transition-colors">
              <div className="font-semibold">Failed to load posts.</div>
              <div className="mt-2 text-sm text-yapper-text/80">
                {error.message}
              </div>
              <div className="mt-2 text-xs text-yapper-text/60 break-all">
                URL: {mockPostsUrl}
              </div>
            </div>
          )}

          {!isLoading &&
            !isError &&
            data.map((post) => <TimelinePost key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
};

export default TimelinePostContainer;
