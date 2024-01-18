"use client";
import React, { useState } from "react";
import InputEmail from "../commons/InputEmail";
import InputPassword from "../commons/InputPassword";
import "../styles/buttons.css";

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
      <InputEmail
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputPassword
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button className="greenButton">Ingresar</button>
      <button className="transparentButton1">Crear Cuenta</button>
      <button className="link1">olvidé mi contraseña</button>
    </div>
  );
}

export default Login;
