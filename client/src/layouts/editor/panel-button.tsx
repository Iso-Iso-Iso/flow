import React from "react";

import style from "./panel-button.module.scss";

import { EditorButtonProps } from "@interfaces/components/editor";

function PanelButton(props: EditorButtonProps) {
  const { children, handler } = props;
  return (
    <button onClick={handler} className={style.button}>
      {children}
    </button>
  );
}

export default PanelButton;
