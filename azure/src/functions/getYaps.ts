import { app, HttpResponseInit } from "@azure/functions";

import { getDb } from "../db";
import { yap as yapSchema } from "../schemas/yap";
import { listYaps } from "../services/yaps";
import { middleware } from "../middleware";

import type { HandlerContext } from "../middleware";

type DrizzleDB = ReturnType<typeof getDb>;

const defaultDb = getDb();

export const getYaps = async (
  _: HandlerContext,
  db: DrizzleDB = defaultDb,
): Promise<HttpResponseInit> => {
  const posts = await listYaps(db, yapSchema);
  return { status: 200, jsonBody: posts };
};

app.http("getYaps", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "posts",
  handler: middleware((ctx) => getYaps(ctx, defaultDb)),
});
