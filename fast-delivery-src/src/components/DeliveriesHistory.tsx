"use client";
import React, { useState } from "react";
import "../styles/init.css";
import "../styles/input.css";
import "../styles/buttons.css";
import BoxIcon from "@/assets/BoxIcon";
import ArrowIcon from "@/assets/ArrowIcon";

const DeliveriesHistory = () =>{
    const [openSection, setOpenSection] = useState(0);

  const handleClick = (selectedSection: number) => {
    if (openSection === 3 || openSection === selectedSection) {
      setOpenSection(openSection - selectedSection)
    } else {
      setOpenSection(openSection + selectedSection)
    }
  };
    return(
<div className="accordion">
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
    </div>

    )
}

export default DeliveriesHistory;