"use client";
import React, { useState } from "react";
import "../../styles/box.css";
import "../../styles/input.css";
import "../../styles/buttons.css";
import Navbar from "@/commons/Navbar";
import TrashIcon from "@/assets/TrashIcon";
import BoxIcon from "@/assets/BoxIcon";

function Init() {
  const rectangleStyle = {
    border: "1px solid #3D1DF3",

    borderRadius: "10px",
    marginTop: "10px",
    display: "flex", // Para alinear los elementos horizontalmente
    alignItems: "center", // Para centrar verticalmente los elementos
  };

  const checkboxStyle = {
    width: "40px",
    height: "40px",
    top: "225px",
    left: "46px",
  };

  const [openSection, setOpenSection] = useState(""); // "repatosPendientes" or "historialRepartos"

  const handleClick = (sectionName: string) => {
    setOpenSection(sectionName === openSection ? "" : sectionName);
  };

  return (
    <div>
      <Navbar />
      <div className="accordion" style={{ marginTop: "4.1rem" }}>
        <div
          style={{ display: "flex", flexDirection: "column", }}
        >
          <div className="boxStyle">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <h1
                style={{ color: "#3D1DF3", fontSize: "16px", display: "flex", justifyContent: "-moz-initial", fontWeight: "bold", }}
                onClick={() => handleClick("repatosPendientes")}
              >
                Repartos Pendientes
              </h1> <svg className="arrowAccordion" xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none" >
                <path d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z" fill="#3D1DF3" />
              </svg></div>  {openSection === "repatosPendientes" && (
                <>
                  <div style={rectangleStyle}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <div
                        style={{ borderRight: "1px dotted #3D1DF3", height: "60px", margin: "10px 10px 10px 0px", display: "flex", padding: "10px 0", flexDirection: "column", justifyItems: "center" }}
                      >
                        <BoxIcon />
                      </div>
                      <div style={{ display: "flex", margin: "0" }}>
                        <div>
                          <h1 style={{ color: "#3D1DF3", fontSize: "12px", fontStyle: "normal", fontWeight: "600 bold", lineHeight: "15px", marginBottom: "5px" }}>
                            <b>#0A235</b>
                          </h1>
                          <h2 style={{ color: "#3D1DF3", fontSize: "12px", fontWeight: "400", }}>
                            Amenabar 2100,<br /> CABA{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div style={{ margin: "0 -10px", display: "flex", flexDirection: "column", alignItems: "end", justifyContent: "space-between", justifySelf: "end", marginLeft: "20px" }} >
                      <p className="tags course">en curso</p>
                      <div style={{ marginRight: "10px" }}>
                        <TrashIcon />
                      </div>
                    </div>
                  </div>
                  <div style={rectangleStyle}>
                    <BoxIcon />
                    <div
                      style={{
                        borderLeft: "1px dotted #3D1DF3",
                        height: "80px",
                        margin: "0 10px",
                      }}
                    ></div>

                    <div style={{ display: "flex", margin: "0" }}>
                      <div style={{ marginRight: "25px" }}> {" "}
                        <h1
                          style={{
                            color: "#3D1DF3",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "600 bold",
                            lineHeight: "15px",
                          }}
                        >
                          <b>#0G370</b>
                        </h1>
                        <h2
                          style={{
                            color: "#3D1DF3",
                            fontSize: "12px",
                            fontWeight: "400",
                          }}
                        >
                          Heredia 785, CABA{" "}
                        </h2>
                      </div>
                      <div style={{ margin: "0 -10px" }} >
                        <p className="tags wait">Pendiente</p>
                        <button className="greenButtonSmall">Iniciar</button>
                      </div>
                    </div>
                  </div>
                </>)}
          </div>
        </div>
        {/*-------------------------------- Second box -----------------------------*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "15px",
          }}
        >
          <div className="boxStyle">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <h1
                style={{
                  color: "#3D1DF3",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "-moz-initial",
                  fontWeight: "700px",
                  lineHeight: "20px",

                }}
                onClick={() => handleClick("historialRepartos")}
              >
                <b>Historial de repartos</b>
              </h1> <svg className="arrowAccordion" xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7" fill="none" >
                <path d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z" fill="#3D1DF3" />
              </svg></div>{openSection === "historialRepartos" && (

                <>
                  <h2 className="paquetes">58 paquetes entregados</h2>
                  <div style={rectangleStyle}>
                    <BoxIcon />

                    <div
                      style={{
                        borderLeft: "1px dotted #3D1DF3",
                        height: "80px",
                        margin: "0 10px",
                      }}
                    ></div>

                    <div style={{ display: "flex", margin: "0" }}>
                      <div style={{ marginRight: "25px" }}> {" "}
                        <h1
                          style={{
                            color: "#3D1DF3",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "600 bold",
                            lineHeight: "15px",
                          }}
                        >
                          <b>#0A235</b>
                        </h1>
                        <h2
                          style={{
                            color: "#3D1DF3",
                            fontSize: "12px",
                            fontWeight: "400",
                          }}
                        >
                          Amenabar 2100, CABA{" "}
                        </h2>
                      </div>
                      <div style={{ margin: "0 -10px" }} >
                        <p className="tags delivered">entregado</p>
                      </div>
                    </div>
                  </div>

                  <div style={rectangleStyle}>
                    <BoxIcon />

                    <div
                      style={{
                        borderLeft: "1px dotted #3D1DF3",
                        height: "80px",
                        margin: "0 10px",
                      }}
                    ></div>

                    <div style={{ display: "flex", margin: "0" }}>
                      <div style={{ marginRight: "25px" }}> {" "}
                        <h1
                          style={{
                            color: "#3D1DF3",
                            fontSize: "12px",
                            fontStyle: "normal",
                            fontWeight: "600 bold",
                            lineHeight: "15px",
                          }}
                        >
                          <b>#0G370</b>
                        </h1>
                        <h2
                          style={{
                            color: "#3D1DF3",
                            fontSize: "12px",
                            fontWeight: "400",
                          }}
                        >
                          Heredia 785, CABA{" "}
                        </h2>
                      </div>
                      <div style={{ margin: "0 -10px" }} >
                        <p className="tags delivered">entregado</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
          </div>
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
          <button style={{ fontFamily: "sans-serif" }} className="greenButton">
            Obtener Paquetes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Init;
