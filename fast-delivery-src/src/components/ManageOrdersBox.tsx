"use client";
import React from "react";
import "../styles/box.css";
import "@/styles/manageOrders.css";
import "../styles/buttons.css";
import "@/styles/avatar.css";
import Avatar from "@/commons/Avatar";
import CarrouselCalendar from "./CarrouselCalendar";
import { TfiPlus } from "react-icons/tfi";

function ManageOrdersBox() {
  const calendarData = ["lun", "mar", "mié", "jue", "vie"];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBox">
        <div style={{ display: "flex", margin: "auto" }}>
          <p className="title">Gestionar Pedidos</p>
        </div>
      </div>
      <div
        className="boxRegisterStyle"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="presentation-container">
          <Avatar
            src="https://static.vecteezy.com/system/resources/previews/023/186/830/non_2x/portrait-of-a-wolf-in-profile-on-a-dark-background-digital-painting-ai-generative-image-free-photo.jpg"
            className="admin-avatar"
          />
          <div className="p-container">
            <p className="hi-admin">¡Hola Admin!</p>
            <p className="days-order">Estos son los pedidos del día</p>
          </div>
        </div>
        <div className="carrousel-calendar-container">
          <CarrouselCalendar calendarData={calendarData} />
        </div>
        <button
          className="greenButton"
          style={{ marginTop: "auto", marginBottom: "10px", fontSize: "12px" }}
        >
          Nuevo Paquete
          <TfiPlus
            style={{ width: "12px", height: "12px", marginLeft: "5px" }}
          />
        </button>
      </div>
    </div>
  );
}

export default ManageOrdersBox;
