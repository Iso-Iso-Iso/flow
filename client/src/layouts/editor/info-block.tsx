import React from "react";

import style from "./info-block.module.scss";

import { EditorBlock } from "draft-js";

import IconInfo from "@icons/info";

function InfoBlock(props: any) {
  return (
    <div className={style.info}>
      <div contentEditable={false} className={style.info__logo}>
        <IconInfo />
      </div>
      <EditorBlock {...props}></EditorBlock>
    </div>
  );
}

export default InfoBlock;
