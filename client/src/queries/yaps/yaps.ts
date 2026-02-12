import { isTimelineYapArray } from "./guards";

import type { QueryFunction } from "@tanstack/react-query";
import type { TimelineYap } from "@/components/TimelineYap/types";

export const yapsQueryFn =
  (url: string): QueryFunction<TimelineYap[]> =>
  async () => {
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

    return data;
  };

export const yapsQueryKey = (url: string) => ["yaps", url] as const;
