import mssql from "mssql";
import { drizzle } from "drizzle-orm/node-mssql";

let poolPromise: Promise<mssql.ConnectionPool> | undefined;

const createDb = (client: mssql.ConnectionPool) => drizzle({ client });
type Db = ReturnType<typeof createDb>;

let db: Db | undefined;

export const getDb = async (): Promise<Db> => {
  if (db) return db;

  const connStr = process.env.DATABASE_URL;
  if (!connStr) throw new Error("Missing DATABASE_URL");

  poolPromise ??= mssql.connect(connStr);
  const pool = await poolPromise;

  db = createDb(pool);
  return db;
};
