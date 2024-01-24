"use client";
import React, { useState } from "react";
import "../../styles/box.css";
import "../../styles/input.css";
import "../../styles/buttons.css";
import Navbar from "@/commons/Navbar";
import TrashIcon from "@/assets/TrashIcon";
import BoxIcon from "@/assets/BoxIcon";
import "../../styles/init.css";

function Init() {
  const [openSection, setOpenSection] = useState(""); // "repatosPendientes" or "historialRepartos"

  const handleClick = (sectionName: string) => {
    setOpenSection(sectionName === openSection ? "" : sectionName);
  };

  return (
    <div>
      <Navbar />
      <div className="accordion" style={{ marginTop: "4.1rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="boxStyle">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h1
                className="box-title"
                onClick={() => handleClick("repatosPendientes")}
              >
                Repartos Pendientes
              </h1>{" "}
              <svg
                className="arrowAccordion"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
              >
                <path
                  d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
                  fill="#3D1DF3"
                />
              </svg>
            </div>{" "}
            {openSection === "repatosPendientes" && (
              <>
                <div className="rectangleStyle">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        borderRight: "1px dotted #3D1DF3",
                        height: "60px",
                        margin: "10px 10px 10px 0px",
                        display: "flex",
                        padding: "10px 0",
                        flexDirection: "column",
                        justifyItems: "center",
                      }}
                    >
                      <BoxIcon />
                    </div>
                    <div style={{ display: "flex", margin: "0" }}>
                      <div>
                        <h1 className="package-code">
                          <b>#0A235</b>
                        </h1>
                        <h2 className="package-direction">
                          Amenabar 2100,
                          <br /> CABA
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      justifyContent: "space-between",
                      justifySelf: "end",
                    }}
                  >
                    <p className="tags course">en curso</p>
                    <div style={{ marginRight: "10px" }}>
                      <TrashIcon />
                    </div>
                  </div>
                </div>
                <div className="rectangleStyle">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        borderRight: "1px dotted #3D1DF3",
                        height: "60px",
                        margin: "10px 10px 10px 0px",
                        display: "flex",
                        padding: "10px 0",
                        flexDirection: "column",
                        justifyItems: "center",
                      }}
                    >
                      <BoxIcon />
                    </div>
                    <div style={{ display: "flex", margin: "0" }}>
                      <div>
                        <h1 className="package-code">
                          <b>#0A235</b>
                        </h1>
                        <h2 className="package-direction">
                          Heredia 785,
                          <br /> CABA
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      justifyContent: "space-between",
                      justifySelf: "end",
                    }}
                  >
                    <p className="tags wait">Pendiente</p>
                    <button
                      className="greenButtonSmall"
                      style={{ marginRight: "6px" }}
                    >
                      Iniciar
                    </button>
                  </div>
                </div>

                {/* <div className="rectangleStyle">
                  <BoxIcon />
                  <div className="dotted-vertical-line"></div>

                  <div style={{ display: "flex", margin: "0" }}>
                    <div style={{ marginRight: "25px" }}>
                      <h1 className="package-code">
                        <b>#0G370</b>
                      </h1>
                      <h2 className="package-direction">Heredia 785, CABA</h2>
                    </div>
                    <div style={{ margin: "0 -10px" }}>
                      <p className="tags wait">Pendiente</p>
                      <button className="greenButtonSmall">Iniciar</button>
                    </div>
                  </div>
                </div> */}
              </>
            )}
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h1
                className="box-title"
                onClick={() => handleClick("historialRepartos")}
              >
                <b>Historial de repartos</b>
              </h1>{" "}
              <svg
                className="arrowAccordion"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
              >
                <path
                  d="M5.26799 6.07909C4.86821 6.55848 4.13179 6.55848 3.73201 6.0791L0.238902 1.89046C-0.304217 1.2392 0.158881 0.249999 1.00689 0.249999L7.99311 0.25C8.84112 0.25 9.30422 1.2392 8.7611 1.89046L5.26799 6.07909Z"
                  fill="#3D1DF3"
                />
              </svg>
            </div>
            {openSection === "historialRepartos" && (
              <>
                <h2 className="paquetes">58 paquetes entregados</h2>

                <div className="rectangleStyle">
                  <BoxIcon />
                  <div className="dotted-vertical-line"></div>

                  <div style={{ display: "flex", margin: "0" }}>
                    <div style={{ marginRight: "25px" }}>
                      <h1 className="package-code">
                        <b>#0A235</b>
                      </h1>
                      <h2 className="package-direction">Amenabar 2100, CABA</h2>
                    </div>
                    <div style={{ margin: "0 -10px" }}>
                      <p className="tags delivered">entregado</p>
                    </div>
                  </div>
                </div>

                <div className="rectangleStyle">
                  <BoxIcon />
                  <div className="dotted-vertical-line"></div>

                  <div style={{ display: "flex", margin: "0" }}>
                    <div style={{ marginRight: "25px" }}>
                      {" "}
                      <h1 className="package-code">
                        <b>#0G370</b>
                      </h1>
                      <h2 className="package-direction">Heredia 785, CABA</h2>
                    </div>
                    <div style={{ margin: "0 -10px" }}>
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
          <button className="greenButton">Obtener Paquetes</button>
        </div>
      </div>
    </div>
  );
}

export default Init;
