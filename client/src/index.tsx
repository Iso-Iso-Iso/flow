import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@styles/main.scss";

import Home from "@routes/home";
import Lessons from "@routes/lessons";

import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<App />}>
          <Route path="lessons" element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
