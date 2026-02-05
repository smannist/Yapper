export type TimelinePostData = {
  id: string;
  userId: string;
  name: string;
  username: string;
  avatarUrl: string;
  message: string;
  imageUrl?: string;
  likes: number;
  replies: number;
  reposts: number;
};

export type TimelinePostProps = {
  post: TimelinePostData;
};
