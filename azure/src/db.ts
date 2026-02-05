import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import type { NodePgDatabase } from "drizzle-orm/node-postgres";

let pool: Pool | undefined;
let db: NodePgDatabase | undefined;

const IS_LOCAL =
  process.env.DB_HOST === "localhost" || process.env.DB_HOST === "127.0.0.1";

export const getPool = (): Pool => {
  if (pool) return pool;

  pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
    ssl: IS_LOCAL ? undefined : { rejectUnauthorized: true },
  });

  return pool;
};

export const getDb = (): NodePgDatabase =>
  (db ??= drizzle({ client: getPool() }));
