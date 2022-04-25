import React, { ReactNode } from "react";

import Styles from "./card-grid.module.scss";

import { PropsWithChildren } from "@interfaces/components/index";

function CardGrid({ children }: PropsWithChildren<ReactNode>) {
  return <div className={Styles.grid}>{children}</div>;
}

export default CardGrid;
