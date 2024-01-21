// page.js
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Page = () => {

  const boxStyle = {
    width: '500px', // Ajusta el ancho según tus necesidades
    height: '800px', // Ajusta la altura según tus necesidades
    margin: '50px auto', // Ajusta el margen según tus necesidades
    backgroundColor: 'white',
    border: '2px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const headerBox = {
    backgroundColor: '#C7FFB1',
    padding: '10px',
    color: '#3D1DF3', 
    textAlign: 'center',
    fontSize: '18px',
    height: "70px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const iconSize = 40; 

  return (
    <div style={boxStyle}>
      <div style={headerBox}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IoArrowBackCircleOutline style={{ marginRight: '10px', fontSize: `${iconSize}px`, color: '#3D1DF3' }} />
          <h1 style={{ marginLeft: '95px', fontWeight: 'bold', fontSize: '21px' }}>Obtener paquetes</h1>
        </div>
        
      </div>

    </div>
  );
};

export default Page;
