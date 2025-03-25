import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./user/component/Header/Header";
import Footer from "./user/component/Footer/Footer";
import AppRoutes from "./user/Routes/Routes";
import { UserProvider } from "./user/Context/UserContext";

const AppWithLocation = () => {
  const location = useLocation(); // Get the current route

  // Check if the current route is login or register
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <div className="app-container">
      {!hideHeaderFooter && <Header />} {/* Conditionally render Header */}
      <main className="app-main">
        <AppRoutes />
      </main>
      {!hideHeaderFooter && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <AppWithLocation />
      </Router>
    </UserProvider>
  );
};

export default App;
