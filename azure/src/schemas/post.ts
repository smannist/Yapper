import { pgTable, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { user } from "./user";

export const post = pgTable("posts", {
  id: varchar("id", { length: 50 }).primaryKey(),

  userId: varchar("user_id", { length: 50 })
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  name: varchar("name", { length: 100 }).notNull(),
  handle: varchar("handle", { length: 50 }).notNull(),
  avatarUrl: varchar("avatar_url", { length: 400 }).notNull(),

  message: varchar("message", { length: 1000 }).notNull(),
  imageUrl: varchar("image_url", { length: 400 }),

  likes: integer("likes").notNull(),
  replies: integer("replies").notNull(),
  reposts: integer("reposts").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true }).notNull(),
});
