"use client";
import React, { useState } from "react";
import "../../styles/init.css";
import "../../styles/input.css";
import "../../styles/buttons.css";
import Navbar from "@/commons/Navbar";
import TrashIcon from "@/assets/TrashIcon";
import BoxIcon from "@/assets/BoxIcon";
import ArrowIcon from "@/assets/ArrowIcon";

function Init() {
  const [openSection, setOpenSection] = useState(0);

  const handleClick = (selectedSection: number) => {
    if (openSection === 3 || openSection === selectedSection) {
      setOpenSection(openSection - selectedSection)
    } else {
      setOpenSection(openSection + selectedSection)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="accordion">

        <div className="accordion-box-top">

          <div className="box-title" onClick={() => handleClick(1)}>
            <h1>Repartos Pendientes</h1>
            <ArrowIcon />
          </div>

          {(openSection === 1 || openSection === 3) && (
            <>
              <div className="package-item">
                <div className="box-icon-info-container" >
                  <BoxIcon />
                  <div className="info-container">
                    <h1 className="package-code">#0A235</h1>
                    <h2 className="package-direction">Amenabar 2100,<br />CABA</h2>
                  </div>
                </div>
                <div className="tags-container" >
                  <p className="tags course">en curso</p>
                  <TrashIcon />
                </div>
              </div>

              <div className="package-item">
                <div className="box-icon-info-container" >
                  <BoxIcon />
                  <div className="info-container">
                    <h1 className="package-code">#0G370</h1>
                    <h2 className="package-direction">Heredia 785,<br />CABA</h2>
                  </div>
                </div>
                <div className="tags-container" >
                  <p className="tags pending">pendiente</p>
                  <button className="greenButtonSmall">Iniciar</button>
                </div>
              </div>
            </>)}
        </div>

        {/*-------------------------------- Second box -----------------------------*/}

        <div className="accordion-box-bottom">

          <div className="box-title" onClick={() => handleClick(2)}>
            <h1>Historial de Repartos</h1>
            <ArrowIcon />
          </div>

          {(openSection === 2 || openSection === 3) && (
            <>
              <p className="package-history">58 paquetes entregados</p>
              <div className="package-item">
                <div className="box-icon-info-container" >
                  <BoxIcon />
                  <div className="info-container">
                    <h1 className="package-code">#0A235</h1>
                    <h2 className="package-direction">Castillo 1356,<br />CABA</h2>
                  </div>
                </div>
                <div className="tags-container" >
                  <p className="tags delivered">entregado</p>
                </div>
              </div>

              <div className="package-item">
                <div className="box-icon-info-container" >
                  <BoxIcon />
                  <div className="info-container">
                    <h1 className="package-code">#0G370</h1>
                    <h2 className="package-direction">Av. Carabobo y Rivadavia, CABA</h2>
                  </div>
                </div>
                <div className="tags-container" >
                  <p className="tags delivered">entregado</p>
                </div>
              </div>
            </>)}
        </div>
        <button className="greenButton">
          Obtener Paquetes
        </button>
      </div>
    </div>

  );
}

export default Init;
