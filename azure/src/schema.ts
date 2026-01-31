import { mssqlSchema, int, nvarchar, datetime2 } from "drizzle-orm/mssql-core";

const dbo = mssqlSchema("dbo");

export const mockPosts = dbo.table("MockPosts", {
  id: nvarchar({ length: 50 }).primaryKey(),
  userId: nvarchar({ length: 50 }).notNull(),
  name: nvarchar({ length: 100 }).notNull(),
  handle: nvarchar({ length: 50 }).notNull(),
  avatarUrl: nvarchar({ length: 400 }).notNull(),
  message: nvarchar({ length: 1000 }).notNull(),
  imageUrl: nvarchar({ length: 400 }),
  likes: int().notNull(),
  replies: int().notNull(),
  reposts: int().notNull(),
  createdAt: datetime2().notNull(),
});
