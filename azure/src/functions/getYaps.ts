import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { getDb } from "../db";
import { yap as yapSchema } from "../schemas/yap";
import { listYaps } from "../services/yaps";
import { HttpError } from "../errors/http";

type DrizzleDB = ReturnType<typeof getDb>;

const defaultDb = getDb();

export const getYaps = async (
  request: HttpRequest,
  context: InvocationContext,
  db: DrizzleDB = defaultDb,
): Promise<HttpResponseInit> => {
  try {
    const posts = await listYaps(db, yapSchema);
    return { status: 200, jsonBody: posts };
  } catch (err) {
    if (err instanceof HttpError) return err.response;
    context.error("Unhandled error in getYaps", err);
    return { status: 500, jsonBody: { error: "internal server error" } };
  }
};

app.http("getYaps", {
  methods: ["GET"],
  authLevel: "anonymous",
  route: "posts",
  handler: getYaps,
});
