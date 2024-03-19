"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "@/styles/box.css";
import "@/styles/buttons.css";
import { verifyAccount } from "@/services/dataUser";

function VerifyAccount() {
  useEffect(() => {
    const currentURL = window.location.href;
    if (currentURL) {
      const urlParts = currentURL.split("/");
      if (urlParts && urlParts.length > 0) {
        const token = urlParts[urlParts.length - 1];
        verifyAccount(token);
      } else {
        console.error("No se pudo dividir la URL");
      }
    } else {
      console.error("No se pudo obtener la URL actual");
    }
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBox">
        <div style={{ display: "flex", margin: "auto" }}>
          <p className="title">Bienvenido</p>
        </div>
      </div>
      <div className="boxRegisterStyle">
        <h3
          style={{
            marginBottom: "10px",
            marginLeft: "5px",
            fontFamily: "Poppins",
            fontSize: "14px",
          }}
        >
          Gracias por verificar tu cuenta, ya puedes iniciar sesión!
        </h3>
        <Link href="/">
          <button className="transparentButton2">Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  );
}

export default VerifyAccount;
