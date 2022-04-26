import React from "react";

import { PropsWithChildren } from "@interfaces/components";

import styles from "./title.module.scss";

function Title({ children }: PropsWithChildren<string>) {
  return <h3 className={styles.title}>{children}</h3>;
}

export default Title;
