import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signInMutationKey, signInMutationFn } from "@/mutations/login/login";

import getUrl from "@/utils/getUrl";
import {
  writeSessionToStorage,
  sessionQueryKey,
} from "@/queries/session/session";

import {
  CREATE_ACCOUNT_CTA_TEXT,
  CTA_TEXT_STYLES,
  FORM_STYLES,
  SIGN_IN_SUCCESS_MESSAGE,
  SUBMIT_BUTTON_LABEL,
  SUBMIT_BUTTON_PENDING_LABEL,
  SUBMIT_BUTTON_STYLES,
} from "./consts";
import FormField from "./FormField";
import StatusMessage from "./StatusMessage";

import type { LeftSidebarFormValues, LoginStatus } from "./types";

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
      className={FORM_STYLES}
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
              className={SUBMIT_BUTTON_STYLES}
              disabled={signInMutation.isPending || !canSubmit}
            >
              {signInMutation.isPending
                ? SUBMIT_BUTTON_PENDING_LABEL
                : SUBMIT_BUTTON_LABEL}
            </button>
          );
        }}
      </leftSidebarForm.Subscribe>
      <p className={CTA_TEXT_STYLES}>{CREATE_ACCOUNT_CTA_TEXT}</p>
    </form>
  );
};

export default LeftSidebarForm;
