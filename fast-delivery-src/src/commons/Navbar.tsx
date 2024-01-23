import React from "react";
import "../styles/navbar.css";
import AppIcon from "../components/AppIcon";
import LogoutIcon from "../components/LogoutIcon";



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
