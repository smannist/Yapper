import type { HTMLInputTypeAttribute } from "react";

export type LoginStatus = "initial" | "error" | "success";

export type LeftSidebarFormValues = {
  username: string;
  password: string;
};

export type LeftSidebarFormProps = {
  onSignedIn?: () => void;
};

export type FormFieldBindings = {
  name: string;
  state: {
    value: string;
  };
  handleBlur: () => void;
  handleChange: (value: string) => void;
};

export type FormFieldProps = {
  field: FormFieldBindings;
  label: string;
  type?: HTMLInputTypeAttribute;
  clearStatus: () => void;
};

export type StatusMessageProps = {
  status: LoginStatus;
  message: string;
};
