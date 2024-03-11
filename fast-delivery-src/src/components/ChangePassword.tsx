"use client";
import InputPassword from "@/commons/InputPassword";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "@/styles/box.css";
import "@/styles/buttons.css";
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changePassword } from "@/services/dataUser";

function ChangePassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.password || !formData.confirmPassword) {
      toast.warn("Debes completar todos los campos");
    } else {
      try {
        const response = await changePassword()
        toast.success("Cambio de contraseña exitoso");
      } catch (error) {
        console.error("Error al recuperar la contraseña:", error);
        toast.error("No se ha podido cambiar la contraseña");
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
        <div style={{ display: "flex", margin: "auto" }}>
          <p className="title">Recuperar Contraseña</p>
        </div>
      </div>
      <div className="boxRegisterStyle">
        <div className="changePFormContainer">
          <form onSubmit={handleSubmit}>
            <InputPassword
              className="inputWhite"
              placeholder="Nueva Contraseña"
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
            {formData.password != formData.confirmPassword ? (
              <Alert
                status="error"
                style={{ height: "25px", fontSize: "12px" }}
              >
                <AlertIcon style={{ height: "15px", width: "15px" }} />
                Las contraseñas no coinciden
              </Alert>
            ) : (
              ""
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginTop: "20px",
                marginBottom: "5px",
              }}
            >
              <button className="greenButton">Confirmar</button>
            </div>
            <ToastContainer
              position="bottom-left"
              transition={Zoom}
              autoClose={4000}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
