import React, { useState } from "react";

import "./header-menu.scss";

import BurgerButton from "@components/burger-button";

import MenuLink from "./menu-link";

import ROUTES from "@routes/index";

// TODO?: refactor with components

function HeaderMenuList() {
  return (
    <>
      <li>
        <MenuLink to={ROUTES.LESSONS}>Уроки</MenuLink>
      </li>
      <li>
        <MenuLink to={ROUTES.TESTS}>Тесты</MenuLink>
      </li>
      <li>
        <MenuLink to={ROUTES.USER_LOGIN}>Войти</MenuLink>
      </li>
      <li>
        <MenuLink to={ROUTES.USER_REGISTER}>Регестрация</MenuLink>
      </li>
    </>
  );
}

function Navigation() {
  const [isBurgerSeen, setIsBurgerSeen] = useState(false);

  return (
    <div className="nav-wrapper">
      <ul
        className={
          "_mobile nav__link-wrapper " +
          (isBurgerSeen ? "nav__link-wrapper_active" : "")
        }
      >
        <HeaderMenuList />
      </ul>
      <nav className="nav">
        <div className="container flex-space">
          <div className="nav__logo">Flow!</div>
          <ul className="nav__link-wrapper flex-space _pc">
            <HeaderMenuList />
          </ul>
          <BurgerButton
            isBurgerSeen={isBurgerSeen}
            setIsBurgerSeen={setIsBurgerSeen}
          />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
