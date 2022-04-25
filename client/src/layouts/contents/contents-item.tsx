import React from "react";
import { Link } from "react-router-dom";

import { ChapterItemProps } from "@interfaces/components/chapterItem";

import "./contents-item.scss";

function ChapterItem(props: ChapterItemProps) {
  const { children, to } = props;

  return (
    <p className="chapter-item">
      <Link to={to}>{children}</Link>
    </p>
  );
}

export default ChapterItem;
