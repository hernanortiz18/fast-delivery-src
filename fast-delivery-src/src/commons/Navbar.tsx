import React from "react";
import "../styles/navbar.css";
import AppIcon from "../assets/AppIcon";
import LogoutIcon from "../assets/LogoutIcon";



function Navbar() {
  return (
    <div className="navbar-container">
      <span className="appIcon-container">
        <AppIcon />
      </span>
      <span className="logoutIcon-container">
        <LogoutIcon />
      </span>
    </div>
  );
}

export default Navbar;
