"use client";
import React from "react";
import "@/styles/packagesAdmin.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import "../styles/init.css";
import TrashIcon from "@/assets/TrashIcon";
import SeeMoreArrow from "@/assets/SeeMoreArrow";
import CalendarComponent from "./CalendarComponent";
import AccordionPackageItem from "./AccordionPackageItem";

function PackagesAdmin() {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="header-box">
        <div className="arrow-back">
          <ArrowBack onClick={handleBackButton} />
        </div>
        <h1 className="header-box-title">Paquetes</h1>
      </div>
      <div className="white-box">
        <div className="date-container">
          <CalendarComponent />
        </div>

        <div className="package-amount">523 paquetes</div>
        <div className="accordion-container">
          <AccordionPackageItem
            packageCode="#0A235"
            packageDirection="Amenabar 2100,<br />CABA"
            additionalElement={
              <TrashIcon style={{marginBottom: "17px"}}/>
            }
          />
           <AccordionPackageItem
            packageCode="#0A235"
            packageDirection="Castillo 1356,<br />CABA"
            additionalElement={
              <TrashIcon style={{marginBottom: "17px"}}/>
            }
          />
            <AccordionPackageItem
            packageCode="#0H167"
            packageDirection="Av. Carabobo 2888,<br />CABA"
            additionalElement={
              <TrashIcon style={{marginBottom: "17px"}}/>
            }
          />
            <AccordionPackageItem
            packageCode="#0H166"
            packageDirection="Mendoza 1810,<br />CABA"
            additionalElement={
              <TrashIcon style={{marginBottom: "17px"}}/>
            }
          />
             <AccordionPackageItem
            packageCode="#0B540"
            packageDirection="Scalabrini Ortiz 5073,<br />CABA"
            additionalElement={
              <TrashIcon style={{marginBottom: "17px"}}/>
            }
          />
        </div>
        <div className="see-more-arrow-container">
          <SeeMoreArrow />
        </div>
      </div>
    </div>
  );
}

export default PackagesAdmin;
