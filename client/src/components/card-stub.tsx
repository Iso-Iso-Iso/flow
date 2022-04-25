import React from "react";

import { Link } from "react-router-dom";
import Arrow from "@components/icons/arrow";

import Styles from "./card-stub.module.scss";
import "./card-stub.scss";

import { StubProps } from "@interfaces/components/stub";

function Stub(props: StubProps) {
  const { children, to } = props;

  return (
    <Link className="stub" to={to}>
      <Arrow className={"mb-medium " + Styles.arrow} />
      <h2 className={Styles.title}>{children}</h2>
    </Link>
  );
}

export default Stub;
