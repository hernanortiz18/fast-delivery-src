"use client";
import React from "react";
import "@/styles/homeDelivery.css";
import "@/styles/input.css";
import "@/styles/buttons.css";
import Navbar from "@/commons/Navbar";
import HomeDeliveryComponent from "@/components/HomeDeliveryComponent";

function Init() {


  return (
    <div>
      <Navbar />
      <HomeDeliveryComponent />
    </div>
  );
}

export default Init;
