import React from "react";

import { Outlet } from "react-router-dom";

import { HeaderMenu } from "@layouts/navigation";

import "swiper/scss";
import "swiper/scss/navigation";

function App() {
  return (
    <>
      <header className="header">
        <HeaderMenu />
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default App;
