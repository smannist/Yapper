import { app, HttpResponseInit } from "@azure/functions";

import { getDb } from "../db";
import { createYap as createYapService } from "../services/yaps";
import { findUserById } from "../services/users";
import { createYapSchema } from "../schemas/yap";
import { parseJsonBody } from "../utils/parseJsonBody";
import { HttpError } from "../errors/http";
import { middleware } from "../middleware";

import type { HandlerContext } from "../middleware";

type DrizzleDB = ReturnType<typeof getDb>;

const defaultDb = getDb();

export const createYap = async (
  { request, tokenClaims }: HandlerContext,
  db: DrizzleDB = defaultDb,
): Promise<HttpResponseInit> => {
  const user = await findUserById(db, tokenClaims.id);

  if (!user) {
    throw new HttpError({
      status: 401,
      jsonBody: { error: "User not found" },
    });
  }

  const { message, imageUrl } = await parseJsonBody(request, createYapSchema);

  const yap = await createYapService(db, {
    userId: tokenClaims.id,
    message,
    imageUrl: imageUrl ?? null,
  });

  return { status: 201, jsonBody: yap };
};

app.http("createYap", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "yaps",
  handler: middleware((ctx) => createYap(ctx, defaultDb), { auth: "required" }),
});
