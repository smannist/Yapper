import type { QueryFunction } from "@tanstack/react-query";
import type { TimelinePostData } from "@/components/TimelinePost/types";

export const mockPostsQueryKey = (url: string) => ["mock-posts", url] as const;

export const mockPostsQueryFn =
  (url: string): QueryFunction<TimelinePostData[]> =>
  async () => {
    const mockPostsResponse = await fetch(url);
    if (!mockPostsResponse.ok) {
      throw new Error(
        `Failed to fetch mock posts: ${mockPostsResponse.status} ${mockPostsResponse.statusText}`,
      );
    }
    return (await mockPostsResponse.json()) as TimelinePostData[];
  };
