import { Dispatch, ReactNode, SetStateAction } from "react";

import { EditorState } from "draft-js";

export interface EditorStateManagmentProps {
  editorState: EditorState;
  setEditorState: Dispatch<SetStateAction<EditorState>>;
}

export interface EditorButtonProps {
  children: ReactNode;
  handler: () => void;
}
