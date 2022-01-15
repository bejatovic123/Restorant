import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const CounterPage = lazy(() => import("./Pages/Counter/Counter"));
const HomePage = lazy(() => import("./Pages/home/Home"));
const ContactPage = lazy(() => import("./Pages/contact/contact"));
const AboutPage = lazy(() => import("./Pages/about/About"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="counter" element={<CounterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
