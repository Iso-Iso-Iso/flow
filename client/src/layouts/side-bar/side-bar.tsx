import React, { ReactNode } from "react";

import "./side-bar.scss";

import { PropsWithChildren } from "@interfaces/components";

function SideBar({ children }: PropsWithChildren<ReactNode>) {
  return <div className="sidebar">{children}</div>;
}

export default SideBar;
