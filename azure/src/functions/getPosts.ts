import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { getDb } from "../db";
import { post as postSchema } from "../schemas/post";
import { listPosts } from "../services/posts";

type DrizzleDB = ReturnType<typeof getDb>;

const defaultDb = getDb();

export const getPosts = async (
  request: HttpRequest,
  context: InvocationContext,
  db: DrizzleDB = defaultDb,
): Promise<HttpResponseInit> => {
  const posts = await listPosts(postSchema, db);
  return { status: 200, jsonBody: posts };
};

app.http("getPosts", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "posts",
  handler: getPosts,
});
