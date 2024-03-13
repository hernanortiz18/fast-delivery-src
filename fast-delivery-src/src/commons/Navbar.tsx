"use client";
import React from "react";
import "../styles/navbar.css";
import AppIcon from "../assets/AppIcon";
import LogoutIcon from "../assets/LogoutIcon";
import dataLogout from "@/services/dataLogout";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const clickLogout = async () => {
    try {
      await dataLogout();
      router.push("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <div className="navbar-container">
      <span className="appIcon-container">
        <AppIcon />
      </span>
      <span className="logoutIcon-container" onClick={clickLogout}>
        <LogoutIcon />
      </span>
    </div>
  );
}

export default Navbar;
