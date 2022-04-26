import React from "react";
import { Link } from "react-router-dom";

import { ContentsItemProps } from "@interfaces/components/contents";

import "./contents-item.scss";

function ChapterItem(props: ContentsItemProps) {
  const { children, to } = props;

  return (
    <p className="chapter-item">
      <Link to={to}>{children}</Link>
    </p>
  );
}

export default ChapterItem;
