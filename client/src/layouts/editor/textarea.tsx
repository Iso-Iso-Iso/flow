import React from "react";

import { Editor, ContentBlock } from "draft-js";

import { Props } from "./interfaces";

import InfoBlock from "./info-block";

import style from "./textarea.module.scss";

function renderValidator(contentBlock: ContentBlock) {
  const blockType = contentBlock.getType();

  if (blockType === "create-info-block") {
    return {
      component: InfoBlock,
      editable: true,
    };
  }
}

function Textarea(props: Props) {
  const { setEditorState, editorState } = props;

  return (
    <div className={style.textarea}>
      <Editor
        blockRendererFn={renderValidator}
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  );
}

export default Textarea;
