import React from "react";

import DictionarySlider from "@pages/lessons/dictionary-slider";
import Contents from "@pages/lessons/contents";
import TestPlaceholder from "@pages/lessons/test-placeholder";

function Lessons() {
  return (
    <div className="container">
      <DictionarySlider />
      <Contents />
      <TestPlaceholder />
    </div>
  );
}

export default Lessons;
