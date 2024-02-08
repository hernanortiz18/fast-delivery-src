import ArrowIcon from "@/assets/ArrowIcon";
import React from "react";
import "@/styles/details.css";
import "@/styles/buttons.css";
import DetailsElement from "@/commons/DetailsElement";
import CircularProgresss from "@/commons/CircularProgresss";
import Link from "next/link";

function DetailsComponent() {
  const fechaActual = new Date();

  const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <div id="details-container" className="detailsContainer">
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="detailsName">Detalles</p>
          <div style={{ display: "flex", gap: "3px", margin: "auto 8px" }}>
            <p className="details-date">{fechaFormateada}</p>
            <ArrowIcon />
          </div>
        </div>
        <hr className="box-dotted-line2" />
        <div className="detailsContainer3">
          <DetailsElement
            title="Repartidores"
            cantidad="2/10"
            accion="habilitados"
            percentage={<CircularProgresss percentage={20} />}
            button={<Link href="/delivery-drivers"><button className="detailsGreenButton">Ver</button></Link>}
          />
          <hr className="box-dotted-line2" />
          <DetailsElement
            title="Paquetes"
            cantidad="16/20"
            accion="Repartidos"
            percentage={<CircularProgresss percentage={80} />}
            button={<Link href="/packages-admin"><button className="detailsGreenButton">Ver</button></Link>}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;
