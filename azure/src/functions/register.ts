import { app, HttpResponseInit } from "@azure/functions";

import { getDb } from "../db";
import { hashPassword } from "../services/auth/password";
import { createUser, findUserByUsername } from "../services/users";
import { parseJsonBody } from "../utils/parseJsonBody";
import { HttpError } from "../errors/http";
import { registerSchema } from "../schemas/user";
import { middleware } from "../middleware";

import type { HandlerContext } from "../middleware";

type DrizzleDB = ReturnType<typeof getDb>;

const defaultDb = getDb();

export const register = async (
  { request }: HandlerContext,
  db: DrizzleDB = defaultDb,
): Promise<HttpResponseInit> => {
  const { username, password } = await parseJsonBody(request, registerSchema);

  const alreadyTaken = await findUserByUsername(db, username);

  if (alreadyTaken) {
    return { status: 409, jsonBody: { error: "username already taken" } };
  }

  const passwordHash = await hashPassword(password);

  const created = await createUser(db, {
    username,
    name: username,
    passwordHash,
  });

  if (!created) {
    throw new HttpError({
      status: 500,
      jsonBody: { error: "registration failed" },
    });
  }

  return {
    status: 201,
    jsonBody: {
      id: created.id,
      username: created.username,
    },
  };
};

app.http("register", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "register",
  handler: middleware((ctx) => register(ctx, defaultDb)),
});
