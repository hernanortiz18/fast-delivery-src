"use client";
import React from "react";
import { useState } from "react";
import BoxIcon from "@/assets/BoxIcon";
import ArrowIcon from "@/assets/ArrowIcon";
import TrashIcon from "@/assets/TrashIcon";
import "../styles/box.css"
import "../styles/init.css"
import "../styles/buttons.css"

const PendingDeliveries = () => {

    const [openSection, setOpenSection] = useState(0);

  const handleClick = (selectedSection: number) => {
    if (openSection === 3 || openSection === selectedSection) {
      setOpenSection(openSection - selectedSection)
    } else {
      setOpenSection(openSection + selectedSection)
    }
  };

    return (
        <div className="accordion-comp">

        <div className="accordion-box-top-comp">

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
    </div>
    )
}

export default PendingDeliveries;