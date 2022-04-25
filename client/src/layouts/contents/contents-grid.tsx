import React from "react";

import ChapterTitle from "@/layouts/contents/contents-title";

import { ChapterProps } from "@interfaces/components/chapter";

import "./contents-grid.scss";

function Chapter(props: ChapterProps) {
  const { children, title } = props;

  return (
    <>
      <ChapterTitle>{title}</ChapterTitle>
      <div className="chapter-grid">{children}</div>
    </>
  );
}

export default Chapter;
