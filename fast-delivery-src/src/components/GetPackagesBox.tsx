import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css";
import "@/styles/buttons.css";
import "@/styles/getPackages.css";

function GetpackageBox() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBox">
        <IoArrowBackCircleOutline className="arrowIcon" />
        <div style={{ display: "flex", margin: "auto" }}>
          <h1 className="title box-title">Obtener paquetes</h1>
        </div>
      </div>
      <div className="boxGetPackagesStyle">
        <h1 className="box-subtitle">¿Cuántos paquetes repartirás hoy?</h1>
        <hr className="box-dotted-line" />
        {/* <div className="box-rectangle-container"> */}
          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" className="input-checkbox" />
            </div>
            <div className="dottedVerticalLine"></div>
            <div>
              <h2 className="box-content">Amenabar 2100,</h2>
              <h2 className="box-content">CABA</h2>
            </div>
          </div>

          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" className="input-checkbox" />
            </div>
            <div className="dottedVerticalLine"></div>
            <div>
              <h2 className="box-content">Av Carabobo 4132,</h2>
              <h2 className="box-content">CABA</h2>
            </div>
          </div>

          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" className="input-checkbox" />
            </div>
            <div className="dottedVerticalLine"></div>
            <div>
              <h2 className="box-content">Melian 1242,</h2>
              <h2 className="box-content">CABA</h2>
            </div>
          </div>

          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" className="input-checkbox" />
            </div>
            <div className="dottedVerticalLine"></div>
            <div>
              <h2 className="box-content">Castillo 670,</h2>
              <h2 className="box-content">CABA</h2>
            </div>
          </div>
          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" className="input-checkbox" />
            </div>
            <div className="dottedVerticalLine"></div>
            <div>
              <h2 className="box-content">Gorriti 4595,</h2>
              <h2 className="box-content">CABA</h2>
            </div>
          </div>
          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" className="input-checkbox" />
            </div>
            <div className="dottedVerticalLine"></div>
            <div>
              <h2 className="box-content">Av. Gral. Mosconi 1056,</h2>
              <h2 className="box-content">CABA</h2>
            </div>
          </div>
          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" className="input-checkbox" />
            </div>
            <div className="dottedVerticalLine"></div>
            <div>
              <h2 className="box-content">Tacuarí 1797,</h2>
              <h2 className="box-content">CABA</h2>
            </div>
          </div>
          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" className="input-checkbox" />
            </div>
            <div className="dottedVerticalLine"></div>
            <div>
              <h2 className="box-content">Av. Francisco Beiro 2667,</h2>
              <h2 className="box-content">CABA</h2>
            </div>
          </div>
        {/* </div> */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <button className="greenButton">Iniciar Jornada</button>
      </div>
    </div>
  );
}

export default GetpackageBox;
