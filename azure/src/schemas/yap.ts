import {
  pgTable,
  varchar,
  integer,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { user } from "./user";

export const yap = pgTable("yaps", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  message: varchar("message", { length: 1000 }).notNull(),
  imageUrl: varchar("image_url"),
  likes: integer("likes").notNull().default(0),
  replies: integer("replies").notNull().default(0),
  reposts: integer("reposts").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const insertYapSchema = createInsertSchema(yap, {
  message: (schema) =>
    schema
      .min(1, { error: "Message cannot be empty" })
      .max(1000, { error: "Message is too long (max 1000 characters)" }),
  imageUrl: () => z.url({ error: "Invalid image URL" }).nullish(),
}) as unknown as z.ZodObject<any>;

export const createYapSchema = insertYapSchema
  .pick({ message: true, imageUrl: true })
  .strict();

export const selectYapSchema = createSelectSchema(yap);
