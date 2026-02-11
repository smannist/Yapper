import { Heart, MessageCircle, Repeat2 } from "lucide-react";

import {
  ACTION_BUTTON_STYLES,
  ACTIONS_STYLES,
  AVATAR_STYLES,
  CARD_STYLES,
  HANDLE_STYLES,
  MEDIA_STYLES,
  MESSAGE_STYLES,
  META_STYLES,
} from "./consts";

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
    <div className={CARD_STYLES}>
      <img
        src={yap.avatarUrl}
        alt={`${yap.username} avatar`}
        className={AVATAR_STYLES}
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <div className={META_STYLES}>
          <span className="font-semibold">{yap.name}</span>
          <span className={HANDLE_STYLES}>{"@" + yap.username}</span>
        </div>
        <p className={MESSAGE_STYLES}>{yap.message}</p>
        {yap.imageUrl ? (
          <img
            src={yap.imageUrl}
            alt="Post media"
            className={MEDIA_STYLES}
            loading="lazy"
          />
        ) : null}
        <div className={ACTIONS_STYLES}>
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
