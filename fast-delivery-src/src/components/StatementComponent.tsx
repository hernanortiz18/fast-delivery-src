"use client";
import React from "react";
import "../styles/box.css";
import IndividualStatement from "./IndividualStatement";

function StatementComponent() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBox">
        <div style={{ display: "flex", margin: "auto" }}>
          <p className="title">Declaración jurada</p>
        </div>
      </div>
      <div className="boxStatementStyle">
        <IndividualStatement content="¿Ha consumido bebidas alcohólicas en las últimas 12 horas?" />
        <IndividualStatement
          content="¿Usted está haciendo uso de algún tipo de medicamento psicoactivo?"
          examples="por ejemplo tranquilizantes, antigripales, antialérgicos o para insomnio."
        />
        <IndividualStatement content="¿Tiene usted algúnn problema familiar, emocional o de cualquier tipo que lo distraiga?" />
        <button className="greenButton" style={{ marginTop: "30px" }}>
          Continuar
        </button>
      </div>
    </div>
  );
}

export default StatementComponent;
