"use client"
import React from "react";
import "@/styles/buttons.css";
import "../styles/getPackages.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import CheckboxPackage from "@/commons/CheckboxPackage";

function GetpackageBox() {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBox">
        <ArrowBack onClick={handleBackButton} />
        <h1 className="title">Obtener paquetes</h1>
      </div>
      <div className="boxGetPackagesStyle">
        <h1 className="box-subtitle">¿Cuántos paquetes repartirás hoy?</h1>

        <CheckboxPackage address="Amenabar 2100" city="CABA" />

        <CheckboxPackage address="Av Carabobo 4132" city="CABA" />

        <CheckboxPackage address="Melian 1242" city="CABA" />

        <CheckboxPackage address="Castillo 670" city="CABA" />

        <CheckboxPackage address="Gorriti 4595" city="CABA" />

        <CheckboxPackage address="Av. Gral. Mosconi 1056" city="CABA" />

        <CheckboxPackage address="Tacuarí 1797" city="CABA" />

        <CheckboxPackage address="Av. Francisco Beiro 2667" city="CABA" />
      </div>
      <div className="button-container">
        <button className="greenButton">Iniciar Jornada</button>
      </div>
    </div>
  );
}

export default GetpackageBox;
