import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './Routes';

const App = () => {
  const location = useLocation(); // Get the current route

  // Check if the current route is login or register
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register';
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

// Wrap App with Router to use useLocation
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;