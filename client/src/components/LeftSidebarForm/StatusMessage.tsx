import cn from "@/utils/cn";

import type { LoginStatus, StatusMessageProps } from "./types";

const LOGIN_STATUS_STYLES: Record<LoginStatus, string> = {
  initial: "text-transparent",
  error: "text-red-600 dark:text-red-300",
  success: "text-emerald-700 dark:text-emerald-300",
};

const StatusMessage = ({ status, message }: StatusMessageProps) => (
  <div className={cn("min-h-0")} role="status" aria-live="polite">
    {message ? (
      <p
        className={cn(
          "text-xs leading-5 transition-colors",
          LOGIN_STATUS_STYLES[status],
        )}
      >
        {message}
      </p>
    ) : null}
  </div>
);

export default StatusMessage;
