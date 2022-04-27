import React from "react";

import { Props } from "./interfaces";

import Button from "./panel-button";

import { RichUtils } from "draft-js";

import IconTitle from "@icons/title";
import IconBold from "@icons/bold";
import IconItalic from "@icons/italic";
import IconInfo from "@icons/info";

import "./panel.scss";

function Panale(props: Props) {
  const { setEditorState } = props;

  function setTitle() {
    setEditorState((state) => RichUtils.toggleBlockType(state, "header-two"));
  }

  function setBold() {
    setEditorState((state) => RichUtils.toggleInlineStyle(state, "BOLD"));
  }
  function setItalic() {
    setEditorState((state) => RichUtils.toggleInlineStyle(state, "ITALIC"));
  }

  function setInfo() {
    setEditorState((state) =>
      RichUtils.toggleBlockType(state, "create-info-block")
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
