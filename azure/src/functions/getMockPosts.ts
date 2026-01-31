import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { desc } from "drizzle-orm";

import { getDb } from "../db";
import { mockPosts } from "../schema";

export const getMockPosts = async (
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> => {
  const db = await getDb();

  const rows = await db
    .select()
    .from(mockPosts)
    .orderBy(desc(mockPosts.createdAt));

  return { status: 200, jsonBody: rows };
};

app.http("getMockPosts", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "mock-posts",
  handler: getMockPosts,
});
