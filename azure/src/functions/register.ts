import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { getDb } from "../db";
import { hashPassword } from "../services/auth/password";
import { createUser, findUserByUsername } from "../services/users";
import { parseJsonBody } from "../utils/parseJsonBody";
import { HttpError } from "../errors/http";
import { registerSchema } from "../schemas/user";

const defaultDb = getDb();

export const register = async (
  request: HttpRequest,
  context: InvocationContext,
  db = defaultDb,
): Promise<HttpResponseInit> => {
  try {
    const { username, password } = await parseJsonBody(request, registerSchema);

    const alreadyTaken = await findUserByUsername(db, username);
    if (alreadyTaken) {
      return { status: 409, jsonBody: { error: "username already taken" } };
    }

    const passwordHash = await hashPassword(password);

    const created = await createUser(db, {
      username,
      name: username, // this indicates the profile name, on creation, we default to the username
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
  } catch (err) {
    if (err instanceof HttpError) return err.response;
    context.error("Unhandled error", err);
    return { status: 500, jsonBody: { error: "internal server error" } };
  }
};

app.http("register", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "register",
  handler: register,
});
