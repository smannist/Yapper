import type { HttpResponseInit } from "@azure/functions";

export class HttpError extends Error {
  constructor(public response: HttpResponseInit) {
    super("HttpError");
  }
}
