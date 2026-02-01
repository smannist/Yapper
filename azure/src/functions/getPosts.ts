import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { getDb } from "../db";
import { post as postSchema } from "../schemas/post";
import { listPosts } from "../services/posts";

export const getPosts = async (
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> => {
  const db = getDb();
  const posts = await listPosts(postSchema, db);
  return { status: 200, jsonBody: posts };
};

app.http("getPosts", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "posts",
  handler: getPosts,
});
