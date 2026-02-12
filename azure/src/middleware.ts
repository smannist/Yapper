import type {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";

import { HttpError } from "./errors/http";
import { getTokenFromRequest, verifyToken } from "./services/auth/jwt";

import type { TokenClaims } from "./services/auth/jwt";

type RequireAuth = "optional" | "required";

type MiddlewareOptions = {
  auth?: RequireAuth;
};

export type HandlerContext = {
  request: HttpRequest;
  context: InvocationContext;
  tokenClaims: TokenClaims | null;
};

type Handler = (ctx: HandlerContext) => Promise<HttpResponseInit>;

const extractTokenClaims = (
  request: HttpRequest,
  context: InvocationContext,
  auth: RequireAuth,
): TokenClaims | null => {
  const token = getTokenFromRequest(request);

  if (!token) {
    if (auth === "required") {
      throw new HttpError({
        status: 401,
        jsonBody: { error: "Missing token" },
      });
    }
    return null;
  }

  try {
    return verifyToken(token, process.env.JWT_SECRET);
  } catch (err) {
    if (auth === "optional") {
      context.log("Ignoring invalid token on optional endpoint");
      return null; // treat as anonymous when auth is optional
    }
    context.warn("Token verification failed", err);
    throw new HttpError({
      status: 401,
      jsonBody: { error: "Token invalid" },
    });
  }
};

export const middleware = (
  handler: Handler,
  options: MiddlewareOptions = { auth: "optional" },
) => {
  const auth = options.auth ?? "optional";
  return async (
    request: HttpRequest,
    context: InvocationContext,
  ): Promise<HttpResponseInit> => {
    try {
      const tokenClaims = extractTokenClaims(request, context, auth);
      return await handler({ request, context, tokenClaims });
    } catch (err) {
      if (err instanceof HttpError) return err.response;
      context.error("Unhandled error", err);
      return { status: 500, jsonBody: { error: "Internal server error" } };
    }
  };
};
