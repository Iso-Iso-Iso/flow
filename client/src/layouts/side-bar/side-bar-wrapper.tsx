import React, { ReactNode } from "react";

import { PropsWithChildren } from "@interfaces/components";

import styles from "./side-bar-wrapper.module.scss";

function SideBarWrapper({ children }: PropsWithChildren<ReactNode>) {
  return <div className={styles.wrapper}> {children}</div>;
}

export default SideBarWrapper;
