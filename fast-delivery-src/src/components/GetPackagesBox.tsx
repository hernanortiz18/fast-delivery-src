"use client";
import React, { useEffect, useState } from "react";
import "@/styles/buttons.css";
import "../styles/getPackages.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import CheckboxPackage from "@/commons/CheckboxPackage";
import { startDelivery, getAllPackages } from "@/services/dataPackages";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

type Package = {
  address: string;
  city: string;
  status: string;
  id: number | null | string;
};

function GetpackageBox() {
  const [packages, setPackages] = useState<Package[]>([]);
  const router = useRouter();

  const user = useAppSelector((state) => state.user);

  const handleBackButton = () => {
    router.back();
  };

  useEffect(() => {
    getAllPackages()
      .then((packages) => {
        const free = packages.filter(
          (freePackage: Package) => freePackage.status === "Free"
        );
        console.log(free);
        setPackages(free);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleIniciarJornada = async () => {
    try {
      setTimeout(() => {
        startDelivery([4, 5, 6], user.id);
        router.push("/home-delivery");
      }, 2000);
    } catch (error) {
      console.error("Error al iniciar la jornada", error);
    }
  };
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
        {packages.length === 0 ? (
          <h3
            style={{
              fontFamily: "Poppins",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Lo siento, no se han encontrado paquetes.
          </h3>
        ) : (
          ""
        )}

        <ul>
          {packages.map((individualPackage, index) => (
            <Link href={`/delivery-map/${individualPackage.id}`}>
              <CheckboxPackage
                key={index}
                address={individualPackage.address}
                city={individualPackage.city}
              />
            </Link>
          ))}
        </ul>
      </div>
      <div className="button-container">
        <button className="greenButton" onClick={handleIniciarJornada}>
          Iniciar Jornada
        </button>
      </div>
    </div>
  );
}

export default GetpackageBox;
