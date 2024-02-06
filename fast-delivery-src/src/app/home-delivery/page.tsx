"use client";
import React, { useState } from "react";
import "../../styles/homeDelivery.css";
import "../../styles/input.css";
import "../../styles/buttons.css";
import Navbar from "@/commons/Navbar";
import AccordionPendingDistributions from "@/components/AccordionPendingDistributions";
import AccordionHistoryDistributions from "@/components/AccordionHistoryDistributions";
import Link from "next/link";

function Init() {
  const [openSection, setOpenSection] = useState(0);

  const handleAccordionClick = () => {
    setOpenSection(openSection === 1 ? 0 : 1);
  };

  return (
    <div>
      <Navbar />
      <div className="accordion">
        <AccordionPendingDistributions onClick={handleAccordionClick} />
        <AccordionHistoryDistributions onClick={handleAccordionClick} />
        <Link href="/get-packages">
          <button className="greenButton">Obtener Paquetes</button>
        </Link>
      </div>
    </div>
  );
}

export default Init;
