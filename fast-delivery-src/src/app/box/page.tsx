"use client";
import React, { ReactNode, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../../styles/box.css";
import "../../styles/input.css";
import "../../styles/buttons.css";
import Navbar from "@/commons/Navbar";

function Box() {
  const dottedLine = {
    marginTop: '10px',
    width: "100%",
  }

  const rectangleStyle = {
    border: "1px solid #3D1DF3",
    padding: "10px",
    borderRadius: "10px",
    marginTop: "20px",
    display: "flex", // Para alinear los elementos horizontalmente
    alignItems: "center", // Para centrar verticalmente los elementos
  }

  const checkboxStyle = {
    marginRight: "5px",
    marginLeft: "10px"

  }

  return (
    <div>
      <Navbar />
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "4.5rem" }}
      >
        <div className="headerBox">
          <IoArrowBackCircleOutline className="arrowIcon" />
          <div style={{ display: "flex", margin: "auto", fontWeight: 'bolder' }}>
            <h1 className="title">Obtener paquetes</h1>
          </div>
        </div>
        <div className="boxStyle">
          <h1 style={{ color: '#3D1DF3', fontSize: '14px', display: 'flex', justifyContent: 'center' }}>¿Cuántos paquetes repartirás hoy?</h1>
          <hr style={dottedLine} />

       
          <div style={rectangleStyle}>
            <div style={checkboxStyle}>
              <input type="checkbox" />
            </div>
            <div style={{ borderLeft: '1px solid #3D1DF3', height: '30px', margin: '0 10px' }}></div>
            <h2 style={{ color: '#3D1DF3', fontSize: '15px',  }}>Amenabar</h2>
          </div>

         
          <div style={rectangleStyle}>
            <div style={checkboxStyle}>
              <input type="checkbox" />
            </div>
            <div style={{ borderLeft: '1px solid #3D1DF3', height: '30px', margin: '0 10px' }}></div>
            <h2 style={{ color: '#3D1DF3', fontSize: '15px',  }}>Av Carabobo</h2>
          </div>


          <div style={rectangleStyle}>
            <div style={checkboxStyle}>
              <input type="checkbox" />
            </div>
            <div style={{ borderLeft: '1px solid #3D1DF3', height: '30px', margin: '0 10px' }}></div>
            <h2 style={{ color: '#3D1DF3', fontSize: '15px',  }}>Melian 1242</h2>
          </div>

          <div style={rectangleStyle}>
            <div style={checkboxStyle}>
              <input type="checkbox" />
            </div>
            <div style={{ borderLeft: '1px solid #3D1DF3', height: '30px', margin: '0 10px' }}></div>
            <h2 style={{ color: '#3D1DF3', fontSize: '15px',  }}>Castillo 670</h2>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "20px", alignItems: "center" }}>
        <button style={{fontFamily: 'sans-serif', }} className="greenButton">Iniciar Jornada</button>
      </div>
    </div>
    
  );
}

export default Box;
