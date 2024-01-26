"use client"
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css";
import "../styles/input.css";
import "../styles/buttons.css";
import { useRouter } from "next/navigation";

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
          <IoArrowBackCircleOutline className="arrowIcon" onClick={handleBackButton}/>
        <div style={{ display: "flex", margin: "auto" }}>
          <h1 className="title">Reparto en curso</h1>
        </div>
      </div>
      <div className="boxDeliveryMapStyle">
        <div className="mapContainer"></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <div className="deliveryMapInfo">
            <p style={{ fontWeight: "bold" }}>Destino: ​ </p>
            <p> Amenabar 2100, CABA</p>
          </div>
          <div className="deliveryMapInfo">
            <p style={{ fontWeight: "bold" }}>Número de paquete: ​ </p>
            <p> #0A235</p>
          </div>
          <div className="deliveryMapInfo">
            <p style={{ fontWeight: "bold" }}>Recibe: ​ </p>
            <p> Mauro Bruno</p>
          </div>
        </div>
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
