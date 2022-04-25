import React from "react";

import { Outlet } from "react-router-dom";

import { HeaderMenu } from "@layouts/navigation";

import "swiper/scss";
import "swiper/scss/navigation";

function App() {
  return (
    <>
      <header>
        <HeaderMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
