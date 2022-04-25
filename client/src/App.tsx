import React from "react";

import { Outlet } from "react-router-dom";

import Navigation from "@layouts/navigation";

import "swiper/scss";
import "swiper/scss/navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
