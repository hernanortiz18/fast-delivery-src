"use client";
import React from "react";
import Logo from "@/assets/Logo";
import Login from "@/components/Login";

function LoginPage() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10rem auto",
        }}
      >
        <Logo />
        <div
          style={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
