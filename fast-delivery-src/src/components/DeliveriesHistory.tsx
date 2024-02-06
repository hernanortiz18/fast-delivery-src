"use client";
import React, { useState } from "react";
import "../styles/init.css";
import "../styles/input.css";
import "../styles/buttons.css";
import BoxIcon from "@/assets/BoxIcon";
import ArrowIcon from "@/assets/ArrowIcon";
import AccordionPackageItem from "./AccordionPackageItem";

const DeliveriesHistory = () => {
  const [openSection, setOpenSection] = useState(0);

  const handleClick = (selectedSection: number) => {
    if (openSection === 3 || openSection === selectedSection) {
      setOpenSection(openSection - selectedSection);
    } else {
      setOpenSection(openSection + selectedSection);
    }
  };
  return (
    <div className="accordion-comp">
      <div className="accordion-box-bottom-comp">
        <div className="box-title" onClick={() => handleClick(2)}>
          <h1>Historial de Repartos</h1>
          <ArrowIcon />
        </div>

        {(openSection === 2 || openSection === 3) && (
          <>
            <p className="package-history">58 paquetes entregados</p>
            <AccordionPackageItem
              packageCode="0A235"
              packageDirection="Amenabar 2100"
              location="CABA"
              tags="delivered"
              tagContent="Entregado"
            />
            <AccordionPackageItem
              packageCode="0A235"
              packageDirection="Amenabar 2100"
              location="CABA"
              tags="delivered"
              tagContent="Entregado"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DeliveriesHistory;
