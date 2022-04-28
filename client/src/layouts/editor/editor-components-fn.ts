import InfoBlock from "./info-block";

import { ContentBlock } from "draft-js";
import COMPONENTS from "./editor-components-type";

function renderEditorFunction(contentBlock: ContentBlock) {
  const blockType = contentBlock.getType();

  if (blockType === COMPONENTS.INFO_BLOCK) {
    return {
      component: InfoBlock,
      editable: true,
    };
  }
}

export default renderEditorFunction;
