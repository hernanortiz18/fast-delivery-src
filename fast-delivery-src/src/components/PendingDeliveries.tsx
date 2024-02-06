"use client";
import React from "react";
import { useState } from "react";
import ArrowIcon from "@/assets/ArrowIcon";
import TrashIcon from "@/assets/TrashIcon";
import "../styles/box.css";
import "../styles/init.css";
import "../styles/buttons.css";
import AccordionPackageItem from "./AccordionPackageItem";

const PendingDeliveries = () => {
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
      <div className="accordion-box-top-comp">
        <div className="box-title" onClick={() => handleClick(1)}>
          <h1>Repartos Pendientes</h1>
          <ArrowIcon />
        </div>

        {(openSection === 1 || openSection === 3) && (
          <>
            <AccordionPackageItem
              packageCode="0A235"
              packageDirection="Amenabar 2100"
              location="CABA"
              tags="course"
              tagContent="En curso"
              additionalElement={<TrashIcon />}
            />
            <AccordionPackageItem
              packageCode="0G370"
              packageDirection="Heredia 785"
              location="CABA"
              tags="pending"
              tagContent="Pendiente"
              additionalElement={
                <button className="greenButtonSmall">iniciar</button>
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PendingDeliveries;
