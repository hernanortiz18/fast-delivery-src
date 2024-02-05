"use client";
import React from "react";
import "../styles/deliveryDrivers.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import BoxIcon from "@/assets/BoxIcon";
import "../styles/init.css";
import "@/styles/avatar.css";
import TrashIcon from "@/assets/TrashIcon";
import SeeMoreArrow from "@/assets/SeeMoreArrow";
import CalendarComponent from "./CalendarComponent";
import Avatar from "@/commons/Avatar";

function DeliveryDrivers() {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="header-box">
        <div className="arrow-back">
          <ArrowBack onClick={handleBackButton} />
        </div>
        <h1 className="header-box-title">Repartidores</h1>
      </div>
      <div className="white-box">
        <CalendarComponent />

        <div className="driver-container">
          <div className="percentage-name-container">
            <div className="percentage"></div>
            <div className="name-tag-container">
              <p className="name">Hernan</p>
              <div className="status-tag course">en curso</div>
            </div>
          </div>
          <Avatar
            src="/img/hernan.jpeg"
            className="distributors-stats-avatar"
          />
        </div>

        <div className="driver-container">
          <div className="percentage-name-container">
            <div className="percentage"></div>
            <div className="name-tag-container">
              <p className="name">Belen</p>
              <div className="status-tag delivered">entregado</div>
            </div>
          </div>
          <Avatar
            src="/img/belen.jpg"
            className="distributors-stats-avatar"
          />
        </div>

        <div className="driver-container">
          <div className="percentage-name-container">
            <div className="percentage"></div>
            <div className="name-tag-container">
              <p className="name">Juan</p>
              <div className="status-tag course">en curso</div>
            </div>
          </div>
          <Avatar
            src="/img/juancho.jpg"
            className="distributors-stats-avatar"
          />
        </div>

        <div className="driver-container">
          <div className="percentage-name-container">
            <div className="percentage"></div>
            <div className="name-tag-container">
              <p className="name">Francisco</p>
              <div className="status-tag disabled">Deshabilitado</div>
            </div>
          </div>
          <Avatar
            src="/img/sosa.jpg"
            className="distributors-stats-avatar"
          />
        </div>

        <div className="see-more-arrow-container">
          <SeeMoreArrow />
        </div>
      </div>
    </div>
  );
}

export default DeliveryDrivers;
