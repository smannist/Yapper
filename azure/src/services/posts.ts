import { desc } from "drizzle-orm";

import type { AnyPgColumn, PgTableWithColumns } from "drizzle-orm/pg-core";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

type PgTableWithCreatedAt = PgTableWithColumns<any> & {
  createdAt: AnyPgColumn;
};

export const listPosts = async (
  table: PgTableWithCreatedAt,
  db: NodePgDatabase,
) => {
  return db.select().from(table).orderBy(desc(table.createdAt));
};
