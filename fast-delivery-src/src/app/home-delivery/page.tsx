"use client";
import React, { useState } from "react";
import "../../styles/homeDelivery.css";
import "../../styles/input.css";
import "../../styles/buttons.css";
import Navbar from "@/commons/Navbar";
import TrashIcon from "@/assets/TrashIcon";
import BoxIcon from "@/assets/BoxIcon";
import ArrowIcon from "@/assets/ArrowIcon";
import AccordionPendingDistributions from "@/components/AccordionPendingDistributions";
import AccordionHistoryDistributions from "@/components/AccordionHistoryDistributions";
import { useRouter } from "next/navigation";

function Init() {
  const [openSection, setOpenSection] = useState(0);
  const router = useRouter()

  const handleAccordionClick = () => {
    setOpenSection(openSection === 1 ? 0 : 1);
    // Aquí puedes realizar cualquier otra lógica que necesites al hacer clic en el acordeón
  };

  const handleClick = () => {
    router.push("/get-packages")
  }

  return (
    <div>
      <Navbar />
      <div className="accordion">
        <AccordionPendingDistributions onClick={handleAccordionClick} />
        <AccordionHistoryDistributions onClick={handleAccordionClick} />
        <button className="greenButton" onClick={handleClick}>Obtener Paquetes</button>
      </div>
    </div>
  );
}

export default Init;
