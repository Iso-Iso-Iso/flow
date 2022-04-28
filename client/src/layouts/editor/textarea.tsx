import React from "react";
import { Editor } from "draft-js";

import { EditorStateManagmentProps } from "@interfaces/components/editor";

import style from "./textarea.module.scss";

import renderEditorFunction from "./editor-components-fn";

function Textarea(props: EditorStateManagmentProps) {
  const { setEditorState, editorState } = props;

  return (
    <div className={style.textarea}>
      <Editor
        blockRendererFn={renderEditorFunction}
        editorState={editorState}
        onChange={setEditorState}
      />
    </div>
  );
}

export default Textarea;
