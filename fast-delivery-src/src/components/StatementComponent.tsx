"use client";
import React, { useEffect, useState } from "react";
import "../styles/box.css";
import IndividualStatement from "./IndividualStatement";
import { updateUser } from "@/services/dataUser";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import dataLogout from "@/services/dataLogout";

function StatementComponent() {
  const [formData, setFormData] = useState({
    alcohol: "",
    drugs: "",
    emotional: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    validateForm();
  };

  const validateForm = () => {
    if (!formData.alcohol && !formData.drugs && !formData.emotional) {
      toast.success(
        "¡Muchas gracias! Ya puede comenzar a repartir sus paquetes."
      );
      setTimeout(() => {
        router.push("/home-delivery");
      }, 3000);
    } else {
      toast.warn("Lo siento, no puede comenzar su día de repartos.");
      setTimeout(() => {
        updateUser(2, { status: "Disabled" });
        dataLogout();
        router.push("/");
      }, 3000);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBox">
        <div style={{ display: "flex", margin: "auto" }}>
          <p className="title">Declaración jurada</p>
        </div>
      </div>
      <form className="boxStatementStyle" onSubmit={handleSubmit}>
        <IndividualStatement
          content="¿Ha consumido bebidas alcohólicas en las últimas 12 horas?"
          type="alcohol"
          setFormData={setFormData}
        />
        <IndividualStatement
          content="¿Usted está haciendo uso de algún tipo de medicamento psicoactivo?"
          examples="por ejemplo tranquilizantes, antigripales, antialérgicos o para insomnio."
          type="drugs"
          setFormData={setFormData}
        />
        <IndividualStatement
          content="¿Tiene usted algún problema familiar, emocional o de cualquier tipo que lo distraiga?"
          type="emotional"
          setFormData={setFormData}
        />
        <button
          className="greenButton"
          style={{ marginTop: "30px" }}
          type="submit"
        >
          Continuar
        </button>
      </form>
      <ToastContainer
        position="bottom-left"
        transition={Zoom}
        autoClose={3000}
      />
    </div>
  );
}

export default StatementComponent;
