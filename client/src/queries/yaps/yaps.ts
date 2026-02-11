// this will be gone later, so will cache
import { isYapsCacheEntry, isTimelineYapArray } from "./guards";

import type { QueryFunction } from "@tanstack/react-query";
import type { TimelineYap } from "@/components/TimelineYap/types";

// use local cache for now, dont really need it but just testing -> delete later.
export const yapsQueryFn =
  (url: string, cacheTimeMs = 0): QueryFunction<TimelineYap[]> =>
  async () => {
    const cacheKey = `posts:${url}`;
    if (cacheTimeMs > 0 && typeof window !== "undefined") {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const parsed: unknown = JSON.parse(cached);
          if (
            isYapsCacheEntry(parsed) &&
            Date.now() - parsed.timestamp < cacheTimeMs
          ) {
            return parsed.data;
          }
        }
      } catch {
        localStorage.removeItem(cacheKey);
      }
    }

    const postsResponse = await fetch(url);

    if (!postsResponse.ok) {
      throw new Error(
        `Failed to fetch posts: ${postsResponse.status} ${postsResponse.statusText}`,
      );
    }

    const data: unknown = await postsResponse.json().catch(() => null);

    if (!isTimelineYapArray(data)) {
      throw new Error("Invalid yaps response from server.");
    }

    if (cacheTimeMs > 0 && typeof window !== "undefined") {
      try {
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ timestamp: Date.now(), data }),
        );
      } catch {
        //
      }
    }

    return data;
  };

export const yapsQueryKey = (url: string) => ["yaps", url] as const;
