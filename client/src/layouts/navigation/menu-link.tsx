import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./menu-link.module.scss";

interface LinkProps {
  to: string;
  children: string;
}

function MenuLink(props: LinkProps) {
  const { to, children } = props;

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    styles.link + " " + (isActive ? styles.link_active : "");

  return (
    <NavLink className={activeLink} to={to}>
      {children}
    </NavLink>
  );
}

export default MenuLink;
