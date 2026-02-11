import type { LoginStatus } from "./types";

export const FORM_STYLES = "space-y-2";

export const FIELD_LABEL_STYLES = "block";
export const FIELD_LABEL_TEXT_STYLES = "mb-1 block text-sm text-yapper-text/80";

export const INPUT_STYLES =
  "w-full rounded-md bg-yapper-bg px-3 py-2 text-sm text-yapper-text outline-none transition-colors focus:bg-yapper-bg/95";
export const INPUT_WRAPPER_STYLES =
  "w-full rounded-md bg-gradient-to-r from-yapper-peach to-yapper-pink p-px";

export const STATUS_CONTAINER_STYLES = "min-h-0";
export const STATUS_TEXT_BASE_STYLES = "text-xs leading-5 transition-colors";

export const LOGIN_STATUS_STYLES: Record<LoginStatus, string> = {
  initial: "text-transparent",
  error: "text-red-600 dark:text-red-300",
  success: "text-emerald-700 dark:text-emerald-300",
};

export const SUBMIT_BUTTON_STYLES =
  "mt-2 w-full rounded-full bg-gradient-to-r from-yapper-peach to-yapper-pink py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70";

export const CTA_TEXT_STYLES = "text-center text-sm text-yapper-text/70";

export const SIGN_IN_SUCCESS_MESSAGE = "Signed in successfully.";
export const SUBMIT_BUTTON_LABEL = "Sign in";
export const SUBMIT_BUTTON_PENDING_LABEL = "Signing in...";
export const CREATE_ACCOUNT_CTA_TEXT = "Don't have an account? Create one!";
