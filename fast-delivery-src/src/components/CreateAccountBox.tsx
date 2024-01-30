"use client";
import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css";
import "../styles/input.css";
import "../styles/buttons.css";
import InputText from "@/commons/InputText";
import InputEmail from "@/commons/InputEmail";
import InputPassword from "@/commons/InputPassword";
import CameraAddIcon from "./CameraAddIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CreateAccountBox() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBox">
          <IoArrowBackCircleOutline className="arrowIcon" onClick={handleBackButton}/>
        <div style={{ display: "flex", margin: "auto" }}>
          <p className="title">Creá tu cuenta</p>
        </div>
      </div>
      <div className="boxRegisterStyle">
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "15px", marginTop: "5px" }}>
        <button>
          <div style={{ width: "95px", height: "95px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #3d1df3", borderRadius: "100px" }}>
            <CameraAddIcon />
          </div>
        </button> 
        </div>
        <div className="formContainer">
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
            name="email"
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
            placeholder="Confirmar Contraseña"
            name="confirmPassword"
            value={formData.confirmPassword}
            disabled={false}
            onChange={handleChange}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "20px", marginBottom: "5px" }}
          >
            <button className="greenButton">Crear</button>
            <button className="link2">¿Ya tenés una cuenta?</button>
            <Link href='/'><button className="transparentButton2">Iniciar Sesión</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountBox;
