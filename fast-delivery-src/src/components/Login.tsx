"use client";
import React, { useState } from "react";
import InputEmail from "../commons/InputEmail";
import InputPassword from "../commons/InputPassword";
import "../styles/buttons.css";
import "../styles/input.css";
import UserIcon from "../assets/UserIcon";
import PswIcon from "../assets/PswIcon";
import Link from "next/link";
import { loginUser } from "@/services/dataLogin";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dataUser } from "@/services/dataUser";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.warn("Debes completar todos los campos");
    } else {
      try {
        const response = await loginUser(formData);
        toast.success("Iniciaste sesión correctamente");
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        toast.error("No se ha podido iniciar sesión");
      }
      setFormData({ email: "", password: "" });
    }
  };

  const handleUserInfo = async () => {
    try {
      const userData = await dataUser();
      toast.info(`El mail con el que iniciaste sesión es: ${userData.email}`);
    } catch (error) {
      console.error("Error al obtener la información del usuario:", error);
      toast.error("No se pudo obtener la información del usuario");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <button type="submit" className="greenButton">
            Ingresar
          </button>
          <Link href="/register">
            <button className="transparentButton1">Crear Cuenta</button>
          </Link>
          <button className="link1">olvidé mi contraseña</button>

          <ToastContainer
            position="bottom-left"
            transition={Zoom}
            autoClose={4000}
          />
        </div>
      </form>
      <button className="link1" onClick={handleUserInfo} style={{
            textAlign: "center" 
          }}>
        Obtener información del usuario
      </button>
    </div>
  );
}

export default Login;
