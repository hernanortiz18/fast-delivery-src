import React, { useEffect, useState } from "react";
import "@/styles/homeDelivery.css";
import "@/styles/input.css";
import "@/styles/buttons.css";
import AccordionPackageItem from "./AccordionPackageItem";
import ArrowIcon from "@/assets/ArrowIcon";
import {
  getPackageByStatus,
  getPackagesByDriver,
} from "@/services/dataPackages";

type AccordionHistoryDistributionsProps = {
  onClick: () => void;
};
type Package = {
  address: string;
  city: string;
  package_code: string;
  status: string;
  driver_id: number;
};

// type SetPackages = React.Dispatch<React.SetStateAction<Package[]>>;
// async function fetchPackages(): Promise<Package[]> {
//   const driverId = 2;
//   const status = "Delivered";
//   try {
//     const packagesByStatus = await getPackageByStatus(status);
//     // Filtra los paquetes obtenidos por el conductor
//     const filteredPackages = packagesByStatus.filter((specificPackage: Package) => specificPackage.driver_id === driverId);

//     return filteredPackages;
//   } catch (error) {
//     console.error("No se han podido obtener todos los paquetes:", error);
//     throw error;
//   }
// }

function AccordionHistoryDistributions({
  onClick,
}: AccordionHistoryDistributionsProps) {
  const [openSection, setOpenSection] = useState(0);
  const [packages, setPackages] = useState<Package[]>([]);


  const handleClick = () => {
    setOpenSection(openSection === 1 ? 0 : 1);
    onClick();
  };

  useEffect(() => {
    getPackagesByDriver(2)
      .then((packages) => {
        const delivered = packages.filter(
          (pendingPackage: Package) => pendingPackage.status === "Delivered"
        );
        setPackages(delivered);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="accordion-box-top">
      <div className="box-title" onClick={handleClick}>
        <h1>Historial de repartos</h1>
        <ArrowIcon />
      </div>

      {(openSection === 1 || openSection === 3) && (
        <>
          <h3
            style={{
              fontFamily: "Poppins",
              fontSize: "14px",
              color: "#3D1DF3",
            }}
          >
            {packages.length} paquetes entregados
          </h3>
          {packages.length === 0 ? (
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
                  individualPackage.status === "Delivered" ? "delivered" : ""
                }
                tagContent={
                  individualPackage.status === "Delivered" ? "Entregado" : ""
                }
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default AccordionHistoryDistributions;
