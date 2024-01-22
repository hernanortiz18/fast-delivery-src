"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import Login from "@/components/Login";

export default function Home() {
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
