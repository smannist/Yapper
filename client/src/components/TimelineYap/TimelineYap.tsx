import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import cn from "@/utils/cn";

import type { TimelineYapProps } from "./types";
import type { MouseEventHandler } from "react";

const TimelineYap = ({ yap }: TimelineYapProps) => {
  const handleReply: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(`Reply pressed for post ${yap.id}.`);
  };

  const handleRepost: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(`Repost pressed for post ${yap.id}.`);
  };

  const handleLike: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(`Like pressed for post ${yap.id}.`);
  };

  return (
    <div
      className={cn("flex gap-3 bg-transparent px-4 py-4 transition-colors")}
    >
      <img
        src={yap.avatarUrl}
        alt={`${yap.username} avatar`}
        className={cn(
          "h-12 w-12 rounded-full border border-yapper-border object-cover",
        )}
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <div
          className={cn(
            "min-w-0 text-small text-yapper-text",
            "flex flex-wrap items-center gap-x-2 gap-y-1",
          )}
        >
          <span className="font-semibold">{yap.name}</span>
          <span
            className={cn(
              "max-w-full truncate text-gray-500 dark:text-gray-400",
            )}
          >
            {"@" + yap.username}
          </span>
        </div>
        <p className={cn("mt-1 wrap-break-word text-base text-yapper-text")}>
          {yap.message}
        </p>
        {yap.imageUrl ? (
          <img
            src={yap.imageUrl}
            alt="Post media"
            className={cn(
              "mt-3 aspect-video w-full rounded-xl",
              "border border-yapper-border object-cover",
            )}
            loading="lazy"
          />
        ) : null}
        <div
          className={cn(
            "mt-4 flex flex-wrap items-center justify-start",
            "gap-1.5 text-yapper-text/70 dark:text-yapper-text sm:gap-3",
          )}
        >
          <button
            type="button"
            onClick={handleReply}
            className="yapper-timeline-action-button"
            aria-label="Reply"
          >
            <MessageCircle className="yapper-timeline-action-icon" />
            <span>{yap.replies}</span>
          </button>
          <button
            type="button"
            onClick={handleRepost}
            className="yapper-timeline-action-button"
            aria-label="Repost"
          >
            <Repeat2 className="yapper-timeline-action-icon" />
            <span>{yap.reposts}</span>
          </button>
          <button
            type="button"
            onClick={handleLike}
            className="yapper-timeline-action-button"
            aria-label="Like"
          >
            <Heart className="yapper-timeline-action-icon" />
            <span>{yap.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineYap;
