import cn from "@/utils/cn";

import type { FormFieldProps } from "./types";

const FormField = ({
  field,
  label,
  type = "text",
  clearStatus,
}: FormFieldProps) => (
  <label className={cn("block")} htmlFor={field.name}>
    <span className={cn("mb-1 block text-sm text-yapper-text/80")}>
      {label}
    </span>
    <div
      className={cn(
        "w-full rounded-md p-px",
        "bg-linear-to-r from-yapper-peach to-yapper-pink",
      )}
    >
      <input
        id={field.name}
        name={field.name}
        type={type}
        className={cn(
          "w-full rounded-md px-3 py-2 text-sm",
          "bg-yapper-bg text-yapper-text",
          "outline-none transition-colors",
          "focus:bg-yapper-bg/95",
        )}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(event) => {
          clearStatus();
          field.handleChange(event.target.value);
        }}
      />
    </div>
  </label>
);

export default FormField;
