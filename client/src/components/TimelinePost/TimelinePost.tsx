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

import type { TimelinePostProps } from "./types";
import type { MouseEventHandler } from "react";

const TimelinePost = ({ post }: TimelinePostProps) => {
  const handleReply: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(`Reply pressed for post ${post.id}.`);
  };

  const handleRepost: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(`Repost pressed for post ${post.id}.`);
  };

  const handleLike: MouseEventHandler<HTMLButtonElement> = () => {
    console.log(`Like pressed for post ${post.id}.`);
  };

  return (
    <div className={CARD_STYLES}>
      <img
        src={post.avatarUrl}
        alt={`${post.handle} avatar`}
        className={AVATAR_STYLES}
        loading="lazy"
      />
      <div className="flex-1 min-w-0">
        <div className={META_STYLES}>
          <span className="font-semibold">{post.name}</span>
          <span className={HANDLE_STYLES}>{post.handle}</span>
        </div>
        <p className={MESSAGE_STYLES}>{post.message}</p>
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
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
            <span>{post.replies}</span>
          </button>
          <button
            type="button"
            onClick={handleRepost}
            className={ACTION_BUTTON_STYLES}
            aria-label="Repost"
          >
            <Repeat2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{post.reposts}</span>
          </button>
          <button
            type="button"
            onClick={handleLike}
            className={ACTION_BUTTON_STYLES}
            aria-label="Like"
          >
            <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{post.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelinePost;
