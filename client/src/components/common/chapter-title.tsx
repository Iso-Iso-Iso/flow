import React from "react";

import { PropsWithChildren } from "@interfaces/components/index";

import "./chapter-title.scss";

function ChapterTitle({ children }: PropsWithChildren<string>) {
  return <h3 className="chapter-title">{children}</h3>;
}

export default ChapterTitle;
