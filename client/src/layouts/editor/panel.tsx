import React from "react";
import { RichUtils } from "draft-js";

import { EditorStateManagmentProps } from "@interfaces/components/editor";

import COMPONENTS from "./editor-components-type";

import Button from "./panel-button";
import IconTitle from "@icons/title";
import IconBold from "@icons/bold";
import IconItalic from "@icons/italic";
import IconInfo from "@icons/info";

import "./panel.scss";

function Panale(props: EditorStateManagmentProps) {
  const { setEditorState } = props;

  function setTitle() {
    setEditorState((state) =>
      RichUtils.toggleBlockType(state, COMPONENTS.TITLE_BLOCK)
    );
  }

  function setBold() {
    setEditorState((state) =>
      RichUtils.toggleInlineStyle(state, COMPONENTS.BOLD)
    );
  }
  function setItalic() {
    setEditorState((state) =>
      RichUtils.toggleInlineStyle(state, COMPONENTS.ITALIC)
    );
  }

  function setInfo() {
    setEditorState((state) =>
      RichUtils.toggleBlockType(state, COMPONENTS.INFO_BLOCK)
    );
  }

  return (
    <div className="editor-panel">
      <Button handler={setTitle}>
        <IconTitle />
      </Button>
      <Button handler={setBold}>
        <IconBold />
      </Button>
      <Button handler={setItalic}>
        <IconItalic />
      </Button>

      <Button handler={setInfo}>
        <IconInfo />
      </Button>
    </div>
  );
}

export default Panale;
