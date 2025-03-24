import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import TopListings from './TopListings';
import AboutUs from './AboutUs';
import './Routes.css';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/verify-email" element={<VerifyEmail />} /> */}
      <Route path="/TopListings" element={<TopListings />} />
      <Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
  );
};

export default AppRoutes;