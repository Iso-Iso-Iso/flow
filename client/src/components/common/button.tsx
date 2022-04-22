import React from "react";

import { Props } from "@/interfaces/components/button";

import "./button.scss";

function Button(props: Props) {
  const {
    children = "отправить",
    primary = false,
    rounded = true,
    huge = false,
    className = "",
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      className={
        "button-component " +
        className +
        " " +
        (primary
          ? "button-component__primary "
          : "button-component__secondary ") +
        (rounded ? "button-component_rounded " : "") +
        (huge ? "button-component_huge " : "")
      }
    >
      {children}
    </button>
  );
}

export default Button;
