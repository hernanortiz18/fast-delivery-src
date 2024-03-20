"use client";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import LoginPage from "./login/page";
import ManageOrders from "./manage-orders/page";
import HomeDeliveryPage from "./home-delivery/page";

export default function Home() {
  const user = useAppSelector((state) => state.user);
  return (
    <>
      {!user.id ? (
        <LoginPage />
      ) : user.role === "Admin" ? (
        <ManageOrders />
      ) : (
        <HomeDeliveryPage />
      )}
    </>
  );
}
