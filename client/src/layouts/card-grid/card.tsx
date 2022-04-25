import React from "react";
import { Link } from "react-router-dom";

import Image from "@assets/lessons/eng.jpg";

import Styles from "./card.module.scss";

import Button from "@components/button";

import { CardProps } from "@interfaces/components/card";

function SimpleCard(props: CardProps) {
  const { children, to = "" } = props;

  return (
    <div className={Styles.card + " card "}>
      <div className={Styles["card__img"] + " img "}>
        <img src={Image} alt="" />
      </div>
      <h2 className={Styles["card__title"]}>{children}</h2>
      <Link className={Styles["card__button"]} to={to}>
        <Button primary>Начать</Button>
      </Link>
    </div>
  );
}

export default SimpleCard;
