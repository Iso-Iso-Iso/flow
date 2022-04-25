import React, { useState } from "react";

import "./index.scss";

import BurgerButton from "@components/burger-button";

import { NavLink } from "react-router-dom";

const Links = () => (
  <>
    <li>
      <NavLink
        className={({ isActive }) =>
          "nav__link " + (isActive ? "nav__link_active " : "")
        }
        to="/lessons"
      >
        Уроки
      </NavLink>
    </li>
    <li>
      <NavLink className="nav__link" to="/">
        Тесты
      </NavLink>
    </li>
    <li>
      <NavLink className="nav__link" to="/">
        Войти
      </NavLink>
    </li>
    <li>
      <NavLink className="nav__link" to="/">
        Регестрация
      </NavLink>
    </li>
  </>
);

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
        <Links />
      </ul>
      <nav className="nav">
        <div className="container flex-space">
          <div className="nav__logo">Flow!</div>
          <ul className="nav__link-wrapper flex-space _pc">
            <Links />
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
