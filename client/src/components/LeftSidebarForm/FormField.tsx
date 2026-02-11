import {
  FIELD_LABEL_STYLES,
  FIELD_LABEL_TEXT_STYLES,
  INPUT_STYLES,
  INPUT_WRAPPER_STYLES,
} from "./consts";

import type { FormFieldProps } from "./types";

const FormField = ({
  field,
  label,
  type = "text",
  clearStatus,
}: FormFieldProps) => (
  <label className={FIELD_LABEL_STYLES} htmlFor={field.name}>
    <span className={FIELD_LABEL_TEXT_STYLES}>{label}</span>
    <div className={INPUT_WRAPPER_STYLES}>
      <input
        id={field.name}
        name={field.name}
        type={type}
        className={INPUT_STYLES}
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
