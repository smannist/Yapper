import type { TimelineYap } from "@/components/TimelineYap/types";

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export const isTimelineYap = (value: unknown): value is TimelineYap => {
  if (!isRecord(value)) return false;
  return (
    typeof value.id === "string" &&
    typeof value.userId === "string" &&
    typeof value.name === "string" &&
    typeof value.username === "string" &&
    typeof value.avatarUrl === "string" &&
    typeof value.message === "string" &&
    typeof value.likes === "number" &&
    typeof value.replies === "number" &&
    typeof value.reposts === "number" &&
    typeof value.createdAt === "string" &&
    (value.imageUrl === null || typeof value.imageUrl === "string")
  );
};

export const isTimelineYapArray = (value: unknown): value is TimelineYap[] =>
  Array.isArray(value) && value.every(isTimelineYap);
