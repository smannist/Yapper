import jwt from "jsonwebtoken";

import type { HttpRequest } from "@azure/functions";
import type { JwtPayload } from "jsonwebtoken";

const AUTH_HEADER = "authorization";
const BEARER_PREFIX = "Bearer ";

export type TokenClaims = {
  id: string;
  username: string;
  name: string;
};

export const getTokenFromRequest = (request: HttpRequest): string | null => {
  const headerValue = request.headers.get(AUTH_HEADER);
  if (!headerValue || !headerValue.startsWith(BEARER_PREFIX)) return null;
  const token = headerValue.slice(BEARER_PREFIX.length).trim();
  return token.length ? token : null;
};

export const signToken = (
  claims: TokenClaims,
  secret: string,
  expiresInSeconds: number,
): string => {
  return jwt.sign(claims, secret, { expiresIn: expiresInSeconds });
};

export const verifyToken = (token: string, secret: string): TokenClaims => {
  const decoded = jwt.verify(token, secret) as JwtPayload | TokenClaims;

  if (!decoded || typeof decoded === "string") {
    throw new Error("Invalid token payload");
  }

  const { id, username, name } = decoded as TokenClaims;

  if (!id || !username || !name) {
    throw new Error("Invalid token claims");
  }

  return { id, username, name };
};
