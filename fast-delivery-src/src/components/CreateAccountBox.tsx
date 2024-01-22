"use client";
import React, { ReactNode, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css";
import "../styles/input.css";
import "../styles/buttons.css";
import InputText from "@/commons/InputText";
import InputEmail from "@/commons/InputEmail";
import InputPassword from "@/commons/InputPassword";

function CreateAccountBox() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "4.5rem" }}
    >
      <div className="headerBox">
        <IoArrowBackCircleOutline className="arrowIcon" />
        <div style={{ display: "flex", margin: "auto" }}>
          <h1 className="title">Creá tu cuenta</h1>
        </div>
      </div>
      <div className="boxStyle">
        <form className="formContainer">
          <InputText
            className="inputWhite"
            placeholder="Nombre"
            name="name"
            value={formData.name}
            disabled={false}
            onChange={handleChange}
          />
          <InputText
            className="inputWhite"
            placeholder="Apellido"
            name="lastname"
            value={formData.lastname}
            disabled={false}
            onChange={handleChange}
          />
          <InputEmail
            className="inputWhite"
            placeholder="Email"
            name="Email"
            value={formData.email}
            disabled={false}
            onChange={handleChange}
          />
          <InputPassword
            className="inputWhite"
            placeholder="Contraseña"
            name="password"
            value={formData.password}
            disabled={false}
            onChange={handleChange}
          />
          <InputPassword
            className="inputWhite"
            placeholder="Repetir Contraseña"
            name="repeatPassword"
            value={formData.confirmPassword}
            disabled={false}
            onChange={handleChange}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "20px" }}
          >
            <button className="greenButton">Crear</button>
            <button className="link2" >Ya tenés una cuenta?</button>
            <button className="transparentButton2">Iniciar Sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountBox;
