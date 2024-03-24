"use client";
import Navbar from "@/commons/Navbar";
import DeliveryMapBox from "@/components/DeliveryMapBox";
import React from "react";
import LoginPage from "../login/page";
import { useAppSelector } from "@/redux/hooks";

function page() {
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
          404 Not Found
        </h2>
      ) : user.role === "Driver" ? (
        <>
          <Navbar />
          <DeliveryMapBox />
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

export default page;
