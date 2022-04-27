import { Dispatch, SetStateAction } from "react";

import { EditorState } from "draft-js";

export interface Props {
  //   editorState: any;
  editorState: EditorState;
  setEditorState: Dispatch<SetStateAction<EditorState>>;
}
