import React from "react";
import { Link } from "react-router-dom";

import "./start-screen.scss";

import Button from "@components/button";
import IconArrow from "@icons/arrow";

import ROUTES from "@routes/index";

import image from "@assets/home/start-screen.jpg";

const StartScreen = () => {
  return (
    <div className="start-screen">
      <div className="container start-screen__container">
        <div className="start-screen__content">
          <div className="start-screen__content-warpper">
            <h1 className="start-screen__title mb-small">Обучайся </h1>
            <h2 className="start-screen__sub-title mb-big">
              Бесплатные курсы английского
            </h2>
            <div className="start-screen__buttons">
              <Link to={ROUTES.LESSONS}>
                <Button huge primary>
                  Начать
                </Button>
              </Link>
              <Link to={ROUTES.USER_LOGIN}>
                <Button huge>Войти</Button>
              </Link>
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
