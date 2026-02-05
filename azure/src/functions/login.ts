import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { getDb } from "../db";
import { signToken } from "../services/auth/jwt";
import { verifyPassword } from "../services/auth/password";
import { findUserByUsername } from "../services/users";
import { loginSchema } from "../schemas/user";
import { parseJsonBody } from "../utils/parseJsonBody";

import type { TokenClaims } from "../services/auth/jwt";

const defaultDb = getDb();

export const login = async (
  request: HttpRequest,
  context: InvocationContext,
  db = defaultDb,
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

  let token: string;
  try {
    const claims: TokenClaims = {
      id: user.id,
      username: user.username,
      name: user.name,
    };
    token = signToken(claims, process.env.JWT_SECRET, 60 * 60);
  } catch (error) {
    context.error("Failed to issue token", error);
    return { status: 500, jsonBody: { error: "token issuance failed" } };
  }

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
  handler: login,
});
