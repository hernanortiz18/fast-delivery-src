"use client";
import React, { useEffect, useState } from "react";
import "@/styles/buttons.css";
import "../styles/getPackages.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import CheckboxPackage from "@/commons/CheckboxPackage";
import { getAllPackages } from "@/services/dataPackages";

type Package = {
  address: string;
  city: string;
};

type SetPackages = React.Dispatch<React.SetStateAction<Package[]>>;
async function fetchPackages(): Promise<Package[]> {
  return await getAllPackages();
}

function GetpackageBox() {
  const [packages, setPackages]: [Package[], SetPackages] = useState<Package[]>(
    []
  );
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPackages = await fetchPackages();
        setPackages(allPackages);
      } catch (error) {
        console.error("No se han podido obtener todos los paquetes:", error);
        throw error;
      }
    };

    fetchData();
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBox">
        <ArrowBack onClick={handleBackButton} />
        <h1 className="title">Obtener paquetes</h1>
      </div>
      <div className="boxGetPackagesStyle">
        <h1 className="box-subtitle">¿Cuántos paquetes repartirás hoy?</h1>

        <ul>
          {packages.map((individualPackage, index) => (
            <CheckboxPackage
              key={index}
              address={individualPackage.address}
              city={individualPackage.city}
            />
          ))}
        </ul>
      </div>
      <div className="button-container">
        <button className="greenButton">Iniciar Jornada</button>
      </div>
    </div>
  );
}

export default GetpackageBox;
