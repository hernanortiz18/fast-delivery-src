"use client"
import React from "react";
import "@/styles/statement.css";
import StatementComponent from "@/components/StatementComponent";
import { useAppSelector } from "@/redux/hooks";
import LoginPage from "../login/page";

function statement() {
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
        <StatementComponent />
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

export default statement;
