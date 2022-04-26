import React, { ReactNode } from "react";

import "./side-content.scss";

import { PropsWithChildren } from "@interfaces/components";

function SideContent({ children }: PropsWithChildren<ReactNode>) {
  return <div className="container">{children}</div>;
}

export default SideContent;
