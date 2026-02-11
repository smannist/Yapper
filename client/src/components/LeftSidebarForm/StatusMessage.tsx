import cn from "@/utils/cn";

import {
  LOGIN_STATUS_STYLES,
  STATUS_CONTAINER_STYLES,
  STATUS_TEXT_BASE_STYLES,
} from "./consts";

import type { StatusMessageProps } from "./types";

const StatusMessage = ({ status, message }: StatusMessageProps) => (
  <div className={STATUS_CONTAINER_STYLES} role="status" aria-live="polite">
    {message ? (
      <p className={cn(STATUS_TEXT_BASE_STYLES, LOGIN_STATUS_STYLES[status])}>
        {message}
      </p>
    ) : null}
  </div>
);

export default StatusMessage;
