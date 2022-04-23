import React from "react";

import "./card.scss";

import Image from "@assets/lessons/eng.jpg";

import { CardProps } from "@interfaces/components/card";

function Card(props: CardProps) {
  const { children } = props;

  return (
    <div className="slide-card">
      <div className="slide-card__img img">
        <img src={Image} alt="" />
      </div>

      <div className="slide-card__content">
        <p className="slide-card__title">{children}</p>
      </div>
    </div>
  );
}

export default Card;
