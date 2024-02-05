"use client";
import React, { useState } from "react";
import Logo from "@/assets/Logo";
import LoginA from "@/components/LoginAdmin";

function LoginAdmin() {
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
        <LoginA />
      </div>
    </div>
    </div>
  )
}

export default LoginAdmin