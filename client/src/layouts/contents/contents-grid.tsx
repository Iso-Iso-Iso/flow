import React from "react";

import ContentsTitle from "@/layouts/contents/contents-title";

import { ContentsProps } from "@/interfaces/components/contents";

import "./contents-grid.scss";

function Chapter(props: ContentsProps) {
  const { children, title } = props;

  return (
    <>
      <ContentsTitle>{title}</ContentsTitle>
      <div className="chapter-grid">{children}</div>
    </>
  );
}

export default Chapter;
