"use client";
import React, { useState } from "react";
import InputEmail from "../commons/InputEmail";
import InputPassword from "../commons/InputPassword";
import "../styles/buttons.css";
import "../styles/input.css";
import UserIcon from "./UserIcon";
import PswIcon from "./PswIcon";
import Link from "next/link";

function LoginAdmin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
    <div className="input-container">
      <span className="icon-container">
        <UserIcon />
      </span>
      <InputEmail
        className="inputBlue"
        placeholder="Email"
        name="email"
        value={formData.email}
        disabled={false}
        onChange={handleChange}
      />
    </div>
    <div className="input-container">
      <span className="icon-container">
        <PswIcon />
      </span>
      <InputPassword
        className="inputBlue"
        placeholder="Password"
        name="password"
        value={formData.password}
        disabled={false}
        onChange={handleChange}
      />
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "20px", alignItems: "center" }}>
      <button className="greenButton">Ingresar</button>
      <button className="link1">olvidé mi contraseña</button>
    </div>
  </div>
  )
}

export default LoginAdmin