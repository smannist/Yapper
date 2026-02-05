import { eq } from "drizzle-orm";

import { user } from "../schemas/user";

import type { NodePgDatabase } from "drizzle-orm/node-postgres";

type NewUserValues = typeof user.$inferInsert;
type UserRow = typeof user.$inferSelect;

export const findUserById = async (db: NodePgDatabase, id: string) => {
  const [result] = await db.select().from(user).where(eq(user.id, id)).limit(1);
  return result ?? null;
};

export const findUserByUsername = async (
  db: NodePgDatabase,
  username: string,
) => {
  const [result] = await db
    .select()
    .from(user)
    .where(eq(user.username, username))
    .limit(1);
  return result ?? null;
};

export const createUser = async (
  db: NodePgDatabase,
  values: NewUserValues,
): Promise<UserRow | null> => {
  const [created] = await db.insert(user).values(values).returning();
  return created ?? null;
};
