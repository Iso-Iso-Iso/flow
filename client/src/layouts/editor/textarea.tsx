import React from "react";

import { Editor } from "draft-js";

import { Props } from "./interfaces";

function Textarea(props: Props) {
  const { setEditorState, editorState } = props;

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default Textarea;
