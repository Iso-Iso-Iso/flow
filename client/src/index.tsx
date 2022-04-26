import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/home";
import Lessons from "@pages/lessons";
import App from "@/App";
import LessonsSingle from "@pages/lessons-single";

import "@styles/main.scss";

import ROUTES from "@routes/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />

        <Route path="/" element={<App />}>
          <Route path={ROUTES.LESSONS} element={<Lessons />} />
          <Route
            path={ROUTES.LESSONS_SINGLE + ":id"}
            element={<LessonsSingle />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
