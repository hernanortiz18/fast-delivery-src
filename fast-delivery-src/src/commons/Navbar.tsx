"use client";
import React from "react";
import "../styles/navbar.css";
import AppIcon from "../assets/AppIcon";
import LogoutIcon from "../assets/LogoutIcon";
import dataLogout from "@/services/dataLogout";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/user";

function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const clickLogout = async () => {
    try {
      await dataLogout();
      dispatch(
        setUser({
          id: null,
          email: "",
          name: "",
          last_name: "",
          role: "",
        })
      );
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
