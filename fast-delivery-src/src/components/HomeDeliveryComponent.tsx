"use client";
import React, { useState } from "react";
import AccordionPendingDistributions from "./AccordionPendingDistributions";
import AccordionHistoryDistributions from "./AccordionHistoryDistributions";
import "@/styles/homeDelivery.css";
import "@/styles/input.css";
import "@/styles/buttons.css";
import Link from "next/link";

function HomeDeliveryComponent() {
  const [openSection, setOpenSection] = useState(0);

  const handleAccordionClick = () => {
    setOpenSection(openSection === 1 ? 0 : 1);
  };

  return (
    <div className="accordion">
      <AccordionPendingDistributions onClick={handleAccordionClick} />
      <AccordionHistoryDistributions onClick={handleAccordionClick} />
      <Link href="/get-packages">
        <button className="greenButton">Obtener Paquetes</button>
      </Link>
    </div>
  );
}

export default HomeDeliveryComponent;
