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
import { useRouter } from "next/navigation";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

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
        setTimeout(() => {
          router.push("/home-delivery");
        }, 3000);
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        toast.error("No se ha podido iniciar sesión");
      }
      setFormData({ email: "", password: "" });
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
          <Link href="/forgot-password">
            <button type="button" className="link1">
              olvidé mi contraseña
            </button>
          </Link>

          <ToastContainer
            position="bottom-left"
            transition={Zoom}
            autoClose={3000}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
