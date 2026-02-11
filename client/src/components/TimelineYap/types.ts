export type TimelineYap = {
  id: string;
  userId: string;
  name: string;
  username: string;
  avatarUrl: string;
  message: string;
  imageUrl: string | null;
  likes: number;
  replies: number;
  reposts: number;
  createdAt: string;
};

export type TimelineYapProps = {
  yap: TimelineYap;
};
