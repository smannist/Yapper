import { z } from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { pgTable, varchar, uuid, timestamp } from "drizzle-orm/pg-core";

const USERNAME_MIN = 5;
const USERNAME_MAX = 15;
const PASSWORD_MIN = 6;
const PASSWORD_MAX = 100;
const DEFAULT_AVATAR_URL = "https://placehold.co/96x96"; // default to a placeholder image for now

export const user = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  username: varchar("username", { length: USERNAME_MAX }).notNull().unique(),
  avatarUrl: varchar("avatar_url", { length: 400 })
    .notNull()
    .default(DEFAULT_AVATAR_URL),
  passwordHash: varchar("password_hash", { length: 200 }).notNull(),
  bio: varchar("bio", { length: 280 }).notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

const userInsertSchema = createInsertSchema(
  user,
) as unknown as z.ZodObject<any>;

const passwordSchema = z
  .string()
  .min(PASSWORD_MIN, "Password must be at least 6 characters long.")
  .max(PASSWORD_MAX, "Password cannot contain more than 100 characters.")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
  .regex(/\d/, "Password must contain at least one number.")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one symbol (e.g. #).");

const usernameSchema = userInsertSchema.shape.username
  .trim()
  .min(
    USERNAME_MIN,
    `Username must be at least ${USERNAME_MIN} characters long.`,
  )
  .max(
    USERNAME_MAX,
    `Username must be at most ${USERNAME_MAX} characters long.`,
  )
  .regex(
    /^[A-Za-z0-9_]+$/,
    "Username can only contain letters, numbers, and underscores (_).",
  );

export const registerSchema = z
  .object({
    username: usernameSchema,
    password: passwordSchema,
  })
  .strict();

export const loginSchema = z
  .object({
    username: usernameSchema,
    password: z.string().min(1, "Password is required.").max(100),
  })
  .strict();

export const selectUserSchema = createSelectSchema(user);
