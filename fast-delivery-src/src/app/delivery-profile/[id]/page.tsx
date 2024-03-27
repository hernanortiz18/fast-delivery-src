"use client";
import Navbar from "@/commons/Navbar";
import DeliveryProfile from "@/components/DeliveryProfile";
import DeliveriesHistory from "@/components/DeliveriesHistory";
import PendingDeliveries from "@/components/PendingDeliveries";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import LoginPage from "../../login/page";
import NotFound from "@/components/NotFound";

const page = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <>
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
      ) : user.role === "Admin" ? (
        <>
          <Navbar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <DeliveryProfile />
          
          </div>
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
          No puede acceder a esta pagina si no es administrador.
        </h2>
      )}
    </>
  );
};

export default page;
