import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../page/LandingPage/LandingPage";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
// import VerifyEmail from "./VerifyEmail";
// import TopListings from "./TopListings";
// import AboutUs from "./AboutUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/verify-email" element={<VerifyEmail />} /> */}
      {/* <Route path="/TopListings" element={<TopListings />} /> */}
      {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
    </Routes>
  );
};

export default AppRoutes;
