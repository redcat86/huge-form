import React from "react";
import DropdownField from "../Form/DropdownField";

const DropdownFieldAdapter = ({
  input,
  meta,
  disabled,
  required,
  inputProps,
  ...rest
}) => {
  return (
    <DropdownField
      disabled={input.value ? input.value.disabled : disabled}
      required={
        input.value && typeof input.value.required !== "undefined"
          ? input.value.required
          : required
      }
      inputProps={{
        ...input,
        ...inputProps
      }}
      hasWarning={meta.data.warning}
      hasError={meta.touched && meta.error}
      description={meta.error || meta.data.warning}
      onChange={value =>
        input.onChange({ inputValue: value, fieldValue: value })
      }
      onType={value => input.onChange({ inputValue: value })}
      onBlur={event => input.onBlur(event)}
      {...rest}
    />
  );
};

export default DropdownFieldAdapter;
