import { SignInError } from "@/errors/signin";
import { isLoginResponse, isErrorResponse } from "./guards";

import type { MutationFunction } from "@tanstack/react-query";
import type { SignInMutationResult, SignInMutationVariables } from "./types";

export const signInMutationFn =
  (
    loginUrl: string,
  ): MutationFunction<SignInMutationResult, SignInMutationVariables> =>
  async ({
    username,
    password,
  }: SignInMutationVariables): Promise<SignInMutationResult> => {
    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const jsonBody: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const message = isErrorResponse(jsonBody)
          ? jsonBody.error
          : "Sign in failed.";
        throw new SignInError(message);
      }

      if (!isLoginResponse(jsonBody)) {
        throw new SignInError("Invalid login response from server.");
      }

      return {
        token: jsonBody.token,
        username: jsonBody.user.username,
      };
    } catch (error) {
      if (error instanceof SignInError) throw error;
      throw new SignInError("Internal server error");
    }
  };

export const signInMutationKey = () => ["auth", "sign-in"] as const;
