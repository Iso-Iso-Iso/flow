import React from "react";

import ROUTES from "@routes/index";

import { Outlet } from "react-router-dom";
import {
  SideBar,
  SideContent,
  SideBarWrapper,
  NavLink,
} from "@layouts/side-bar";

import IconHome from "@icons/home";
import IconMortorboard from "@icons/mortorboard";
import IconPlus from "@icons/plus";
import IconBook from "@icons/book";

function Admin() {
  return (
    <SideBarWrapper>
      <SideBar>
        <NavLink to={ROUTES.ADMINPANEL}>
          <IconHome /> Главная
        </NavLink>
        <NavLink to={ROUTES.ADMINPANEL_LESSONS_ADD}>
          <IconPlus /> Создать Урок
        </NavLink>
        <NavLink to={ROUTES.ADMINPANEL_LESSONS}>
          <IconMortorboard /> Уроки
        </NavLink>
        <NavLink to={ROUTES.ADMINPANEL_DICTIONARIES_ADD}>
          <IconPlus /> Создать Словарь
        </NavLink>
        <NavLink to={ROUTES.ADMINPANEL_DICTIONARIES}>
          <IconBook /> Словари
        </NavLink>
      </SideBar>
      <SideContent>
        <Outlet />
      </SideContent>
    </SideBarWrapper>
  );
}

export default Admin;
