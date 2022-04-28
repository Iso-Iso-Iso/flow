import React from "react";

import { CheckboxProps } from "@interfaces/components/checkbox";

import "./checkbox.scss";

function Checkbox(props: CheckboxProps) {
  const { onChange, active, children } = props;

  return (
    <>
      <label
        className={
          "checkbox mb-medium " + (children ? "checkbox_with-children" : "")
        }
      >
        <input
          className="input-checkbox"
          onChange={(event) => onChange(event.target.checked)}
          checked={active}
          type="checkbox"
        />
        <div
          className={
            "checkbox__lever-wrapper " +
            (active ? "checkbox__lever-wrapper_active " : "") +
            (children ? "mr-medium" : "")
          }
        >
          <div
            className={
              "checkbox__lever " + (active ? "checkbox__lever_active" : "")
            }
          ></div>
        </div>
        {children}
      </label>
    </>
  );
}

export default Checkbox;
