import { desc, eq, getTableColumns } from "drizzle-orm";

import { yap } from "../schemas/yap";
import { user } from "../schemas/user";

import type { NodePgDatabase } from "drizzle-orm/node-postgres";

type YapTable = typeof yap;
type NewYapValues = typeof yap.$inferInsert;
type YapRow = typeof yap.$inferSelect;

export const listYaps = async (db: NodePgDatabase, table: YapTable) => {
  return db
    .select({
      ...getTableColumns(table),
      name: user.name,
      username: user.username,
      avatarUrl: user.avatarUrl,
    })
    .from(table)
    .innerJoin(user, eq(table.userId, user.id))
    .orderBy(desc(table.createdAt));
};

export const createYap = async (
  db: NodePgDatabase,
  values: NewYapValues,
): Promise<YapRow | null> => {
  const [created] = await db.insert(yap).values(values).returning();
  return created ?? null;
};
