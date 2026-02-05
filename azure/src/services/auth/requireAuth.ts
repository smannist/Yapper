import { getTokenFromRequest, verifyToken } from "./jwt";
import { HttpError } from "../../errors/http";

import type { HttpRequest, InvocationContext } from "@azure/functions";
import type { TokenClaims } from "./jwt";

export const requireAuth = (
  request: HttpRequest,
  context: InvocationContext,
): TokenClaims => {
  const token = getTokenFromRequest(request);

  if (!token) {
    throw new HttpError({
      status: 401,
      jsonBody: { error: "missing token" },
    });
  }

  try {
    return verifyToken(token, process.env.JWT_SECRET);
  } catch (err) {
    context.warn("Token verification failed", err);
    throw new HttpError({
      status: 401,
      jsonBody: { error: "token invalid" },
    });
  }
};
