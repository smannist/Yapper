import { app, HttpResponseInit } from "@azure/functions";

import { getDb } from "../db";
import { HttpError } from "../errors/http";
import { signToken } from "../services/auth/jwt";
import { verifyPassword } from "../services/auth/password";
import { findUserByUsername } from "../services/users";
import { loginSchema } from "../schemas/user";
import { parseJsonBody } from "../utils/parseJsonBody";
import { middleware } from "../middleware";

import type { HandlerContext } from "../middleware";
import type { TokenClaims } from "../services/auth/jwt";

type DrizzleDB = ReturnType<typeof getDb>;

const defaultDb = getDb();

export const login = async (
  { request, context }: HandlerContext,
  db: DrizzleDB = defaultDb,
): Promise<HttpResponseInit> => {
  const { username, password } = await parseJsonBody(request, loginSchema);

  const user = await findUserByUsername(db, username);

  const isValid =
    user && user.passwordHash
      ? await verifyPassword(password, user.passwordHash)
      : false;

  if (!user || !isValid) {
    return {
      status: 401,
      jsonBody: { error: "invalid username or password" },
    };
  }

  const claims: TokenClaims = {
    id: user.id,
    username: user.username,
    name: user.name,
  };

  const token = signToken(claims, process.env.JWT_SECRET, 60 * 60);

  return {
    status: 200,
    jsonBody: {
      token,
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
      },
    },
  };
};

app.http("login", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "login",
  handler: middleware((ctx) => login(ctx, defaultDb)),
});
