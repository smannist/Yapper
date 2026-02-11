import type { LoginResponse } from "./types";

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

export const isLoginResponse = (value: unknown): value is LoginResponse => {
  if (!isRecord(value)) return false;
  if (typeof value.token !== "string" || value.token.trim().length === 0)
    return false;
  if (!isRecord(value.user)) return false;
  return (
    typeof value.user.name === "string" &&
    value.user.name.trim().length > 0 &&
    typeof value.user.username === "string" &&
    value.user.username.trim().length > 0
  );
};

export const isErrorResponse = (value: unknown): value is { error: string } =>
  isRecord(value) &&
  typeof value.error === "string" &&
  value.error.trim().length > 0;
