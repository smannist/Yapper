import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { getDb } from "../db";
import { createYap as createYapService } from "../services/yaps";
import { findUserById } from "../services/users";
import { requireAuth } from "../services/auth/requireAuth";
import { createYapSchema } from "../schemas/yap";
import { parseJsonBody } from "../utils/parseJsonBody";
import { HttpError } from "../errors/http";

const defaultDb = getDb();

export const createYap = async (
  request: HttpRequest,
  context: InvocationContext,
  db = defaultDb,
): Promise<HttpResponseInit> => {
  try {
    const tokenClaims = requireAuth(request, context);

    const user = await findUserById(db, tokenClaims.id); // this is only used for validation purposes, see if its really needed
    if (!user) {
      throw new HttpError({
        status: 401,
        jsonBody: { error: "user not found" },
      });
    }

    const { message, imageUrl } = await parseJsonBody(request, createYapSchema);
    const yap = await createYapService(db, {
      userId: tokenClaims.id,
      message,
      imageUrl: imageUrl ?? null,
    });

    return { status: 201, jsonBody: yap };
  } catch (err) {
    if (err instanceof HttpError) return err.response;
    context.error("Unhandled error", err);
    return { status: 500, jsonBody: { error: "internal server error" } };
  }
};

app.http("createYap", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "yaps",
  handler: createYap,
});
