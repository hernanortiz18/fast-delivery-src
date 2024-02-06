"use client";
import React from "react";
import "../styles/deliveryDrivers.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import "../styles/init.css";
import "@/styles/avatar.css";
import SeeMoreArrow from "@/assets/SeeMoreArrow";
import CalendarComponent from "./CalendarComponent";
import Avatar from "@/commons/Avatar";
import CircularProgresss from "@/commons/CircularProgresss";
import DeliveryDriverCommon from "@/commons/DeliveryDriverCommon";

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
        <div className="drivers-container">
          <DeliveryDriverCommon
            driverName="Hernan"
            tags="course"
            tagContent="en curso"
            percentage={<CircularProgresss percentage={25} />}
            avatar={
              <Avatar
                src="/img/hernan.jpeg"
                className="distributors-stats-avatar"
              />
            }
          />
          <DeliveryDriverCommon
            driverName="Belen"
            tags="course"
            tagContent="En curso"
            percentage={<CircularProgresss percentage={65} />}
            avatar={
              <Avatar
                src="/img/belen.jpg"
                className="distributors-stats-avatar"
              />
            }
          />
          <DeliveryDriverCommon
            driverName="Juan"
            tags="delivered"
            tagContent="Entregado"
            percentage={<CircularProgresss percentage={100} />}
            avatar={
              <Avatar
                src="/img/juancho.jpg"
                className="distributors-stats-avatar"
              />
            }
          />
          <DeliveryDriverCommon
            driverName="Francisco"
            tags="disabled"
            tagContent="Deshabilitado"
            percentage={<CircularProgresss percentage={0} />}
            avatar={
              <Avatar
                src="/img/sosa.jpg"
                className="distributors-stats-avatar"
              />
            }
          />
          <DeliveryDriverCommon
            driverName="Franco"
            tags="delivered"
            tagContent="Entregado"
            percentage={<CircularProgresss percentage={100} />}
            avatar={<Avatar src="/img/franco.jpg" className="distributors-stats-avatar" />}
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
