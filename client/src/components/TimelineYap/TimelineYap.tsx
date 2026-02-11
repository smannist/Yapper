import { Heart, MessageCircle, Repeat2 } from "lucide-react";
import cn from "@/utils/cn";

import type { TimelineYapProps } from "./types";
import type { MouseEventHandler } from "react";

const ACTION_BUTTON_STYLES = cn(
  "inline-flex items-center whitespace-nowrap rounded-full",
  "gap-1 px-2 py-1 text-[11px] font-medium sm:gap-2 sm:px-3 sm:py-1.5 sm:text-sm",
  "border border-transparent bg-yapper-surface",
  "text-yapper-text/70 dark:text-yapper-text",
  "transition-colors hover:border-yapper-border hover:bg-yapper-surface-strong",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yapper-text/30",
  "sm:cursor-pointer",
);

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
            className={ACTION_BUTTON_STYLES}
            aria-label="Reply"
          >
            <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{yap.replies}</span>
          </button>
          <button
            type="button"
            onClick={handleRepost}
            className={ACTION_BUTTON_STYLES}
            aria-label="Repost"
          >
            <Repeat2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{yap.reposts}</span>
          </button>
          <button
            type="button"
            onClick={handleLike}
            className={ACTION_BUTTON_STYLES}
            aria-label="Like"
          >
            <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{yap.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineYap;
