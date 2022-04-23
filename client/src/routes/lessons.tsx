import React from "react";

import DictionarySlider from "@components/lessons/dictionary-slider";
import Contents from "@components/lessons/contents";

function Lessons() {
  return (
    <div className="container">
      <DictionarySlider />
      <Contents />
    </div>
  );
}

export default Lessons;
