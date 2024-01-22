import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import "../styles/box.css"

function HeaderBox() {
  return (
    <div className="headerBox">
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoArrowBackCircleOutline className="arrowIcon" />
          <h1 className="title">Creá tu cuenta</h1>
        </div>
      </div>
  )
}

export default HeaderBox