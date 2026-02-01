import { pgTable, varchar } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: varchar("id", { length: 50 }).primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  handle: varchar("handle", { length: 50 }).notNull().unique(),
  avatarUrl: varchar("avatar_url", { length: 400 }).notNull(),
  bio: varchar("bio", { length: 280 }),
});
