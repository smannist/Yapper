import type { Config } from "drizzle-kit";

const isLocal =
  process.env.DB_HOST === "localhost" || process.env.DB_HOST === "127.0.0.1";

export default {
  schema: "./src/schemas/index.ts",
  out: "./drizzle.migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT)!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    ssl: isLocal ? undefined : "require",
  },
} satisfies Config;
