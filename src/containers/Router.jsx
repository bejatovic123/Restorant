import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('./Pages/home/Home'));
const ContactPage = lazy(() => import('./Pages/contact/Contact'));
const AboutPage = lazy(() => import('./Pages/about/About'));
const LoginPage = lazy(() => import('./Pages/login/Login'));
const RegisterPage = lazy(() => import('./Pages/register/Register'));
const MenuPage = lazy(() => import('./Pages/Menu/Menu'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='menu' element={<MenuPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
