import React, { useState } from "react";
import "@/styles/homeDelivery.css";
import "@/styles/input.css";
import "@/styles/buttons.css";
import TrashIcon from "@/assets/TrashIcon";
import AccordionPackageItem from "./AccordionPackageItem";
import ArrowIcon from "@/assets/ArrowIcon";

type AccordionPendingDistributionsProps = {
  onClick: () => void;
};

function AccordionPendingDistributions({
  onClick,
}: AccordionPendingDistributionsProps) {
  const [openSection, setOpenSection] = useState(0);

  const handleClick = () => {
    setOpenSection(openSection === 1 ? 0 : 1);
    onClick(); // Puedes llamar a la función onClick desde aquí si es necesario
  };
  return (
    <div className="accordion-box-top">
      <div className="box-title" onClick={handleClick}>
        <h1>Repartos Pendientes</h1>
        <ArrowIcon />
      </div>

      {(openSection === 1 || openSection === 3) && (
        <>
          <AccordionPackageItem
            packageCode="#0A235"
            packageDirection="Amenabar 2100,<br />CABA"
            tags="course"
            tagContent="En curso"
            additionalElement={<TrashIcon />}
          />
          <AccordionPackageItem
            packageCode="#0G370"
            packageDirection="Heredia 785,<br />CABA"
            tags="pending"
            tagContent="Pendiente"
            additionalElement={
              <button className="greenButtonSmall">iniciar</button>
            }
          />
        </>
      )}
    </div>
  );
}

export default AccordionPendingDistributions;
