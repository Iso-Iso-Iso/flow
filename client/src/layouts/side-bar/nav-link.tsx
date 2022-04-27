import React from "react";

import styles from "./link.module.scss";

import { PropsLink } from "@interfaces/components";

import { NavLink } from "react-router-dom";

function Link(props: PropsLink) {
  const { to, children } = props;

  return (
    <NavLink
      end={true}
      className={({ isActive }: { isActive: boolean }) =>
        styles.link + " " + (isActive ? styles.link_active : "")
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default Link;
