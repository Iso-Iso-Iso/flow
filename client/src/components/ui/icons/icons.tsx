import React, { ComponentType } from "react";

import "./icons.scss";

import { PropsWithClassName } from "@interfaces/components";

function Icon(Icon: ComponentType) {
  return function (props: PropsWithClassName) {
    const { className = "", ...iconProps } = props;

    return (
      <div className={"icon " + className}>
        <Icon {...iconProps} />
      </div>
    );
  };
}

export default Icon;
