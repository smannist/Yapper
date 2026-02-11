import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signInMutationKey, signInMutationFn } from "@/mutations/login/login";

import { BUTTON_VARIANT_LABELS } from "@/components/LeftSidebarButton/labels";
import {
  writeSessionToStorage,
  sessionQueryKey,
} from "@/queries/session/session";

import FormField from "./FormField";
import StatusMessage from "./StatusMessage";
import getUrl from "@/utils/getUrl";
import cn from "@/utils/cn";

import type { LeftSidebarFormValues, LoginStatus } from "./types";

const SIGN_IN_SUCCESS_MESSAGE = "Signed in successfully.";
const SUBMIT_BUTTON_PENDING_LABEL = "Signing in...";
const CREATE_ACCOUNT_CTA_TEXT = "Don't have an account? Create one!"; // TODO: create sign up functionality later

const hasSignInCredentials = (username: string, password: string): boolean =>
  username.trim().length > 0 && password.length > 0;

const LeftSidebarForm = () => {
  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationKey: signInMutationKey(),
    mutationFn: signInMutationFn(getUrl("/api/login")),
    onSuccess: (result) => {
      writeSessionToStorage(result);
      queryClient.setQueryData(sessionQueryKey(), result);
    },
  });

  const clearStatus = () => {
    if (!signInMutation.isError && !signInMutation.isSuccess) {
      return;
    }
    signInMutation.reset();
  };

  const loginStatus: LoginStatus = signInMutation.isError
    ? "error"
    : signInMutation.isSuccess
      ? "success"
      : "initial";
  const statusMessage = signInMutation.isError
    ? signInMutation.error.message
    : signInMutation.isSuccess
      ? SIGN_IN_SUCCESS_MESSAGE
      : "";

  const leftSidebarForm = useForm({
    defaultValues: {
      username: "",
      password: "",
    } as LeftSidebarFormValues,
    onSubmit: async ({ value }) => {
      const username = value.username.trim();
      const password = value.password;

      clearStatus();

      if (!hasSignInCredentials(username, password)) {
        return;
      }

      await signInMutation.mutateAsync({ username, password });
    },
  });

  return (
    <form
      className={cn("space-y-2")}
      onSubmit={(event) => {
        event.preventDefault();
        void leftSidebarForm.handleSubmit();
      }}
    >
      <StatusMessage status={loginStatus} message={statusMessage} />
      <leftSidebarForm.Field name="username">
        {(field) => (
          <FormField field={field} label="Username" clearStatus={clearStatus} />
        )}
      </leftSidebarForm.Field>
      <leftSidebarForm.Field name="password">
        {(field) => (
          <FormField
            field={field}
            label="Password"
            type="password"
            clearStatus={clearStatus}
          />
        )}
      </leftSidebarForm.Field>
      <leftSidebarForm.Subscribe
        selector={(state) => [state.values.username, state.values.password]}
      >
        {([username, password]) => {
          const canSubmit = hasSignInCredentials(username, password);
          return (
            <button
              type="submit"
              className={cn("mt-2 text-sm", "yapper-signature-cta")}
              disabled={signInMutation.isPending || !canSubmit}
            >
              {signInMutation.isPending
                ? SUBMIT_BUTTON_PENDING_LABEL
                : BUTTON_VARIANT_LABELS.signIn}
            </button>
          );
        }}
      </leftSidebarForm.Subscribe>
      <p className={cn("text-center text-sm text-yapper-text/70")}>
        {CREATE_ACCOUNT_CTA_TEXT}
      </p>
    </form>
  );
};

export default LeftSidebarForm;
