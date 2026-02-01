import { desc } from "drizzle-orm";
import { getDb } from "../db";

import type { AnyPgColumn, PgTableWithColumns } from "drizzle-orm/pg-core";

type PgTableWithCreatedAt = PgTableWithColumns<any> & {
  createdAt: AnyPgColumn;
};

export const listPosts = async (table: PgTableWithCreatedAt) => {
  const db = getDb();
  return db.select().from(table).orderBy(desc(table.createdAt));
};
