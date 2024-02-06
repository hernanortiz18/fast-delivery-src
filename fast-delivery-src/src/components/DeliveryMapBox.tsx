"use client";
import React from "react";
import "../styles/box.css";
import "../styles/input.css";
import "../styles/buttons.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import DeliveryMapInfo from "./DeliveryMapInfo";

function DeliveryMapBox() {
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
        <div style={{ display: "flex", margin: "auto" }}>
          <h1 className="title">Reparto en curso</h1>
        </div>
      </div>

      <div className="boxDeliveryMapStyle">
        <div className="mapContainer"></div>
        <DeliveryMapInfo
          packageDirection="Amenabar 2100"
          packageCode="0A235"
          clientName="Mauro Bruno"
        />
        <button className="greenButton" style={{ marginTop: "30px" }}>
          Finalizar
        </button>
      </div>
      <div style={{ display: "flex", margin: "15px auto" }}>
        <button className="transparentButton1">Cancelar entrega</button>
      </div>
    </div>
  );
}

export default DeliveryMapBox;
