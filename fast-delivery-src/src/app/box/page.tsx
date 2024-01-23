// box.tsx
// Importaciones necesarias
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../../styles/box.css"; // Importa estilos globales
import "../../styles/input.css";
import "../../styles/buttons.css";
import Navbar from "@/commons/Navbar";
import "./boxStyles.css"; 

function Box() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", marginTop: "4.5rem" }}>
        <div className="headerBox">
          <IoArrowBackCircleOutline className="arrowIcon" />
          <div style={{ display: "flex", margin: "auto" }}>
            <h1 className="title box-title">Obtener paquetes</h1>
          </div>
        </div>
        <div className="boxStyle">
          <h1 className="box-subtitle">¿Cuántos paquetes repartirás hoy?</h1>
          <hr className="box-dotted-line" />

          
          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" />
            </div>
            <div style={{ borderLeft: '1px solid #3D1DF3', height: '30px', margin: '0 10px' }}></div>
            <div>
              <h2 style={{ color: '#3D1DF3', fontSize: '15px' }}>Amenabar</h2>
              <h2 style={{ color: '#3D1DF3', fontSize: '15px' }}>CABA</h2>
            </div>
          </div>

          
          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" />
            </div>
            <div style={{ borderLeft: '1px solid #3D1DF3', height: '30px', margin: '0 10px' }}></div>
            <div>
              <h2 style={{ color: '#3D1DF3', fontSize: '15px' }}>Av Carabobo</h2>
              <h2 style={{ color: '#3D1DF3', fontSize: '15px' }}>CABA</h2>
            </div>
          </div>


          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" />
            </div>
            <div style={{ borderLeft: '1px solid #3D1DF3', height: '30px', margin: '0 10px' }}></div>
            <div>
              <h2 style={{ color: '#3D1DF3', fontSize: '15px' }}>Melian 1242</h2>
              <h2 style={{ color: '#3D1DF3', fontSize: '15px' }}>CABA</h2>
            </div>
          </div>

          
          <div className="box-rectangle">
            <div className="box-checkbox">
              <input type="checkbox" />
            </div>
            <div style={{ borderLeft: '1px solid #3D1DF3', height: '30px', margin: '0 10px' }}></div>
            <div>
              <h2 style={{ color: '#3D1DF3', fontSize: '15px' }}>Castillo 670</h2>
              <h2 style={{ color: '#3D1DF3', fontSize: '15px' }}>CABA</h2>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "20px", alignItems: "center" }}>
        <button className="greenButton">Iniciar Jornada</button>
      </div>
    </div>
  );
}

export default Box;
