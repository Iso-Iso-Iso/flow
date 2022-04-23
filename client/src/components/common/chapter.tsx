import React from "react";

import ChapterTitle from "@common/chapter-title";

import { ChapterProps } from "@interfaces/components/chapter";

import "./chapter.scss";

function Chapter(props: ChapterProps) {
  const { children, title } = props;

  return (
    <>
      <ChapterTitle>{title}</ChapterTitle>
      <div className="chapter-grid">
        {children}
        {/* <ChapterItem to="/">Presen Simple</ChapterItem>
        <ChapterItem to="/">Past Simple</ChapterItem>
        <ChapterItem to="/">Presen Progressive</ChapterItem>{" "}
        <ChapterItem to="/">Past Progressive</ChapterItem> */}
      </div>
    </>
  );
}

export default Chapter;
