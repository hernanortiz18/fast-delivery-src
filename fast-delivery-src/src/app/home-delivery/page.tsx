"use client";
import React from "react";
import "@/styles/homeDelivery.css";
import "@/styles/input.css";
import "@/styles/buttons.css";
import Navbar from "@/commons/Navbar";
import HomeDeliveryComponent from "@/components/HomeDeliveryComponent";
import { useAppSelector } from "@/redux/hooks";
import LoginPage from "../login/page";
import NotFound from "@/components/NotFound";

function HomeDeliveryPage() {
  const user = useAppSelector((state) => state.user);

  return (
    <div>
      {!user.id ? (
        <h2
          style={{
            color: "white",
            fontFamily: "Poppins",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <NotFound />
        </h2>
      ) : user.role === "Driver" ? (
        <>
          <Navbar />
          <HomeDeliveryComponent />
        </>
      ) : (
        <h2
          style={{
            color: "white",
            fontFamily: "Poppins",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          No puede acceder a esta pagina si no es repartidor.
        </h2>
      )}
    </div>
  );
}

export default HomeDeliveryPage;
