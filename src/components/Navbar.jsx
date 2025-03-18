import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaBell } from "react-icons/fa"; // Icons for the Navbar
import "./styles/Navbar.css"; // Create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section: Toggle Button (Optional) */}
      <div className="navbar-left">
        <button className="toggle-btn">
          <FaBars />
        </button>
      </div>

      {/* Middle Section: Brand/Logo */}
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          My Dashboard
        </Link>
      </div>

      {/* Right Section: User Profile and Notifications */}
      <div className="navbar-right">
        <div className="notification-icon">
          <FaBell />
          <span className="notification-badge">3</span> {/* Notification count */}
        </div>
        <div className="user-profile">
          <FaUserCircle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;