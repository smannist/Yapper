import cn from "@/utils/cn";
import TimelinePost from "@/components/TimelinePost";

import {
  BASE_CONTAINER_STYLES,
  BASE_HEADER_STYLES,
  TIMELINE_CONTAINER_STYLES,
  TIMELINE_SCROLL_AREA_STYLES,
} from "./consts";

import { MOCK_POSTS } from "./mocks";

const TimelinePostContainer = () => {
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
          {MOCK_POSTS.map((post) => (
            <TimelinePost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePostContainer;
