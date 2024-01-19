"use client";
import React, { useState } from "react";
import InputEmail from "../commons/InputEmail";
import InputPassword from "../commons/InputPassword";
import "../styles/buttons.css";
import "../styles/input.css";
import UserIcon from "./UserIcon";
import PswIcon from "./PswIcon";
import PswVisibleIcon from "./PswVisibleIcon";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
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
          onChange={handleChange}
        />
      </div>
      <button className="greenButton">Ingresar</button>
      <button className="transparentButton1">Crear Cuenta</button>
      <button className="link1">olvidé mi contraseña</button>
    </div>
  );
}

export default Login;
