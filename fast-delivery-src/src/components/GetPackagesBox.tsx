import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css"

function GetpackageBox() {
  return (
    <div className='boxStyle'>
    <div className='headerBox'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IoArrowBackCircleOutline className='arrowIcon' />
        <h1 className='title'>Obtener paquetes</h1>
      </div>
      
    </div>

  </div>
  )
}

export default GetpackageBox