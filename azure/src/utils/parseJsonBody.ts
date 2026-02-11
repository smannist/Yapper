import { z } from "zod";
import { HttpError } from "../errors/http";

import type { HttpRequest } from "@azure/functions";

export const parseJsonBody = async <S extends z.ZodTypeAny>(
  request: HttpRequest,
  schema: S,
): Promise<z.infer<S>> => {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    throw new HttpError({
      status: 400,
      jsonBody: { error: "Invalid JSON body" },
    });
  }

  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message,
    }));

    const firstMessage = issues[0];
    const errorMessage = firstMessage?.message ?? "Invalid payload";

    throw new HttpError({
      status: 400,
      jsonBody: {
        error: errorMessage,
        issues,
      },
    });
  }

  return parsed.data;
};
