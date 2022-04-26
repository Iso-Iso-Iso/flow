import React from "react";

import styles from "./link.module.scss";

import { PropsLink } from "@interfaces/components";

function Link(props: PropsLink) {
  const { to, children, isActive = false } = props;

  return (
    <a
      className={styles.link + " " + (isActive ? styles.link_active : "")}
      href={to}
    >
      {children}
    </a>
  );
}

export default Link;
