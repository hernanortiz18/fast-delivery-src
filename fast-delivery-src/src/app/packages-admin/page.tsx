"use client";
import Navbar from "@/commons/Navbar";
import PackagesAdmin from "@/components/PackagesAdmin";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import LoginPage from "../login/page";
import NotFound from "@/components/NotFound";

function PackagesAdminPage() {
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
      ) : user.role === "Admin" ? (
        <>
          <Navbar />
          <PackagesAdmin />
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

export default PackagesAdminPage;
