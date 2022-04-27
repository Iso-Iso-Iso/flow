import React, { ReactNode } from "react";

import { PropsWithChildren } from "@interfaces/components";

import style from "./panel-button.module.scss";
// TODO! remove ugly code
function PanelButton(
  props: PropsWithChildren<ReactNode> & { handler?: () => any }
) {
  const { children, handler } = props;
  return (
    <button onClick={handler} className={style.button}>
      {children}
    </button>
  );
}

export default PanelButton;
