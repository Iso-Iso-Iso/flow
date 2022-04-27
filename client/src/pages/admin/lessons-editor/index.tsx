import React, { useState } from "react";

import { EditorState, Editor } from "draft-js";

import { Textarea, Panel } from "@layouts/editor";

function LessonsEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div>
      <Panel editorState={editorState} setEditorState={setEditorState} />
      <Textarea editorState={editorState} setEditorState={setEditorState} />
    </div>
  );
}

export default LessonsEditor;
