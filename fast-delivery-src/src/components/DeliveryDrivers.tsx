"use client";
import React, { useEffect, useState } from "react";
import "../styles/deliveryDrivers.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import "../styles/init.css";
import "@/styles/avatar.css";
import SeeMoreArrow from "@/assets/SeeMoreArrow";
import CalendarComponent from "./CalendarComponent";
import Avatar from "@/commons/Avatar";
import CircularProgresss from "@/commons/CircularProgresss";
import DeliveryDriverCommon from "@/commons/DeliveryDriverCommon";
import { getAllUsers } from "@/services/dataUser";

type Users = {
  name: string;
  role: string;
  status: string;
};

function DeliveryDrivers() {
  const [users, setUsers] = useState<Users[]>([]);
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  useEffect(() => {
    getAllUsers()
      .then((users) => {
        const drivers = users.filter(
          (driverUser: Users) => driverUser.role === "Driver"
        );
        console.log(drivers);
        setUsers(drivers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="header-box">
        <div className="arrow-back">
          <ArrowBack onClick={handleBackButton} />
        </div>
        <h1 className="header-box-title">Repartidores</h1>
      </div>
      <div className="white-box">
        <CalendarComponent />
        <div className="drivers-container">
          {users.length === 0 ? (
            <h3
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Lo siento, no se han encontrado repartidores.
            </h3>
          ) : (
            ""
          )}
          <ul>
            {users.map((user, index) => (
              <DeliveryDriverCommon
                key={index}
                driverName={user.name}
                tags={
                  user.status === "On Course"
                    ? "course"
                    : user.status === "Disabled"
                    ? "disabled"
                    : user.status === "Inactive"
                    ? "inactive"
                    : user.status === "Free"
                    ? "free"
                    : ""
                }
                tagContent={
                  user.status === "On Course"
                    ? "En curso"
                    : user.status === "Disabled"
                    ? "Deshabilitado"
                    : user.status === "Inactive"
                    ? "Inactivo"
                    : user.status === "Free"
                    ? "Habilitado"
                    : ""
                }
                percentage={<CircularProgresss percentage={25} />}
                avatar={
                  <Avatar
                    src="/img/franco.jpg"
                    className="distributors-stats-avatar"
                  />
                }
              />
            ))}
          </ul>
        </div>
        <div className="see-more-arrow-container">
          <SeeMoreArrow />
        </div>
      </div>
    </div>
  );
}

export default DeliveryDrivers;
