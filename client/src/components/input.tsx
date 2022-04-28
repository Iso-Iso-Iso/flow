import React from "react";

import "./input.scss";

import { InputProps } from "@interfaces/components/input";

function Input(props: InputProps) {
  const { value = "", onChange, className, ...inputProps } = props;

  return (
    <input
      {...inputProps}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={"input-component " + className}
      type="text"
    />
  );
}

export default Input;
