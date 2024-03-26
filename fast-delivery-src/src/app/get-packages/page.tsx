"use client";
import React from "react";
import Navbar from "@/commons/Navbar";
import GetpackageBox from "@/components/GetPackagesBox";
import LoginPage from "../login/page";
import { useAppSelector } from "@/redux/hooks";
import NotFound from "@/components/NotFound";

function Box() {
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
          <GetpackageBox />
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

export default Box;
