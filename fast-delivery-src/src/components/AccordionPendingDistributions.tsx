import React, { useEffect, useState } from "react";
import "@/styles/homeDelivery.css";
import "@/styles/input.css";
import "@/styles/buttons.css";
import TrashIcon from "@/assets/TrashIcon";
import AccordionPackageItem from "./AccordionPackageItem";
import ArrowIcon from "@/assets/ArrowIcon";
import {
  getPackageByStatus,
  getPackagesByDriver,
} from "@/services/dataPackages";

type AccordionPendingDistributionsProps = {
  onClick: () => void;
};

type Package = {
  address: string;
  city: string;
  package_code: string;
  status: string;
  driver_id: number;
};

async function fetchPackages(driverId: number): Promise<Package[]> {
  const status1 = "On Course"; 
  const status2 = "Pending"; 
  
  try {
    const packagesByStatus1 = await getPackageByStatus(status1);
    const packagesByStatus2 = await getPackageByStatus(status2);
    
    
    const filteredPackages = [...packagesByStatus1, ...packagesByStatus2].filter((specificPackage) => specificPackage.status === status1 || specificPackage.status === status2);
    
    console.log(filteredPackages);

    const driverPackages = await getPackagesByDriver(2);
    const filteredDriverPackages = driverPackages.filter((specificPackage: Package) => specificPackage.status === status1 || specificPackage.status === status2);

    // Combinar los paquetes filtrados por estado y por conductor
    const combinedPackages = [...filteredPackages, ...filteredDriverPackages];
    
    return combinedPackages;
  } catch (error) {
    console.error("No se han podido obtener todos los paquetes:", error);
    throw error;
  }
}

function AccordionPendingDistributions({
  onClick,
}: AccordionPendingDistributionsProps) {
  const [openSection, setOpenSection] = useState(0);
  const [packages, setPackages] = useState<Package[]>([]);
  const [noPackages, setNoPackages] = useState(false);

  const handleClick = () => {
    setOpenSection(openSection === 1 ? 0 : 1);
    onClick();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const driverId = 2;
        const driverPackages = await fetchPackages(driverId);
        setPackages(driverPackages);
        setNoPackages(driverPackages.length === 0);
      } catch (error) {
        console.error("No se han podido obtener todos los paquetes:", error);
        setNoPackages(true);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="accordion-box-top">
      <div className="box-title" onClick={handleClick}>
        <h1>Repartos Pendientes</h1>
        <ArrowIcon />
      </div>

      {(openSection === 1 || openSection === 3) && (
        <>
          {noPackages ? (
            <h3
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Lo siento, no se han encontrado paquetes.
            </h3>
          ) : (
            ""
          )}
          <ul>
            {packages.map((individualPackage, index) => (
              <AccordionPackageItem
                key={index}
                package_code={individualPackage.package_code}
                address={individualPackage.address}
                city={individualPackage.city}
                tags={
                  individualPackage.status === "On Course"
                    ? "course"
                    : "pending"
                }
                tagContent={
                  individualPackage.status === "On Course"
                    ? "En curso"
                    : "Pendiente"
                }
                additionalElement={
                  individualPackage.status === "On Course" ? (
                    <TrashIcon style={{ cursor: "pointer" }} />
                  ) : (
                    <button className="greenButtonSmall">iniciar</button>
                  )
                }
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default AccordionPendingDistributions;
