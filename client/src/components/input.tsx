import React, { forwardRef, useState, useMemo } from "react";

import "./input.scss";

import { InputProps } from "@interfaces/components/input";
import { useRef } from "react";

// TODO! reduce "any" types

const Input = forwardRef((props: InputProps, ref: any) => {
  const {
    onChange,
    className,
    error = false,
    placeholder = "Введите информацию",
    type = "text",
    ...inputProps
  } = props;

  const labelElement = useRef<HTMLLabelElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const isAddFocusStyles = useMemo<boolean>(() => {
    const input = labelElement.current?.querySelector("input");

    if (!input?.value) return isFocused;
    return true;
  }, [isFocused, labelElement]);

  return (
    <label
      ref={labelElement}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={
        "input-wrapper " +
        (error ? "input-wrapper_error " : "") +
        (isAddFocusStyles ? "input-wrapper_focused " : "") +
        className
      }
    >
      <input
        ref={ref}
        {...inputProps}
        onChange={onChange}
        className={"input-component "}
        type={type}
      />
      <span className="input-placeholder"> {placeholder} </span>
    </label>
  );
});

export default Input;
