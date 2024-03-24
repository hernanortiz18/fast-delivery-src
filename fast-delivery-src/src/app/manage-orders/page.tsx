"use client";
import Navbar from "@/commons/Navbar";
import ManageOrdersBox from "@/components/ManageOrdersBox";
import React from "react";
import LoginPage from "../login/page";
import { useAppSelector } from "@/redux/hooks";

function ManageOrders() {
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
      ) : user.role === "Admin" ? (
        <>
          <Navbar />
          <ManageOrdersBox />
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
    </div>
  );
}

export default ManageOrders;
