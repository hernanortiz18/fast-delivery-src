"use client";
import ArrowBack from "@/assets/ArrowBack";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/box.css";
import "@/styles/buttons.css";
import "@/styles/input.css"
import InputEmail from "@/commons/InputEmail";

function SendMailChangePsw() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email) {
      toast.warn("Debes completar con tu mail");
    } else {
      try {
        const response = await toast.success(
          "Se ha enviado un enlace a tu mail para el cambio de contraseña"
        );
      } catch (error) {
        console.error("Hubo un error con el mail:", error);
        toast.error("Hubo un error con el mail");
      }
    }
  };
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
        <ArrowBack onClick={handleBackButton} />
        <div style={{ display: "flex", margin: "auto" }}>
          <p className="title">Recuperar Contraseña</p>
        </div>
      </div>
      <div className="boxRegisterStyle">
        <div className="changePFormContainer">
          <form onSubmit={handleSubmit}>
            <InputEmail
              className="inputWhite"
              placeholder="Email"
              name="email"
              value={formData.email}
              disabled={false}
              onChange={handleChange}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "20px",
                marginBottom: "5px",
              }}
            >
              <button className="greenButton">Enviar</button>
            </div>
            <ToastContainer
              position="top-right"
              transition={Zoom}
              autoClose={4000}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SendMailChangePsw;
