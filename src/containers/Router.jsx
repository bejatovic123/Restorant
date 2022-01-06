import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { About } from "./Pages/about/About";
import { Home } from "./Pages/home/Home";

const CounterPage = lazy(() => import("./Pages/Counter/Counter"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" />
          <Route path="counter" element={<CounterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
