"use client";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Image from "next/image";
import "../styles/box.css";
import "../styles/switch.css";
import "../styles/buttons.css";

import deliveryProfileImage from "../assets/delivery-profile.jpeg";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";

const DeliveryProfile = () => {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "3.5rem",
      }}
    >
      <div className="headerBoxProfile">
        <ArrowBack onClick={handleBackButton} />
        <div style={{ margin: "auto" }}>
          <h1 className="title">Perfil del repartidor</h1>
        </div>
      </div>
      <div className="boxDeliveryProfileStyle">
        <div style={{ width: "25%" }}>
          <Image
            src={deliveryProfileImage}
            alt="Profile-Image"
            width={56}
            height={56}
            style={{
              borderRadius: "50%",
              margin: "",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            marginLeft: "15px",
          }}
        >
          <h1 className="deliveryName">Hernán Ortiz</h1>
          <span
            style={{
              marginTop: "5px",
              backgroundColor: "#C7FFB1",
              borderRadius: "999px",
              color: "#3D1DF3",
              height: "15px",
              width: "79px",
              fontSize: "10px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            HABILITADO
          </span>
        </div>
        <label className="switch" style={{ right: "0", top: "18px" }}>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};
export default DeliveryProfile;
