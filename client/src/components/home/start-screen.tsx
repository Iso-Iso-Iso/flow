import React from "react";
import "./start-screen.scss";

import Button from "@common/button";

import image from "@assets/home/start-screen.jpg";

import IconArrow from "@icons/arrow";

const StartScreen = () => {
  return (
    <div className="start-screen">
      <div className="container start-screen__container">
        <div className="start-screen__content">
          <div className="start-screen__content-warpper">
            <h1 className="start-screen__title mb-medium">Следи за потоком </h1>
            <div className="start-screen__buttons">
              <Button huge primary>
                Начать
              </Button>
              <Button huge>Войти</Button>
            </div>
          </div>
        </div>

        <div className="start-screen__skew-wrapper">
          <div className="start-screen__img img">
            <img src={image} alt="" />
          </div>
          <div className="start-screen__mobile">
            <IconArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
