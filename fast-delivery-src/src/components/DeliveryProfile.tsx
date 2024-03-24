"use client";
import React, { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Image from "next/image";
import "../styles/box.css";
import "../styles/switch.css";
import "../styles/buttons.css";
import "@/styles/init.css";
import Avatar from "@/commons/Avatar";
import "@/styles/avatar.css";
import "@/components/PendingDeliveries";
import "@/components/DeliveriesHistory";
import deliveryProfileImage from "../assets/delivery-profile.jpeg";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import { getUserById, updateUser } from "@/services/dataUser";
import PendingDistributions from "@/components/PendingDeliveries";
import DeliveriesHistory from "@/components/DeliveriesHistory";
import PendingDeliveries from "@/components/PendingDeliveries";

type User = {
  id: number;
  name: string;
  last_name: string;
  role: string;
  status: string;
};

const DeliveryProfile = () => {
  const [openSection, setOpenSection] = useState(0);
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [userStatus, setUserStatus] = useState("Free");

  const handleBackButton = () => {
    router.back();
  };
  const handleAccordionClick = () => {
    setOpenSection(openSection === 1 ? 0 : 1);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserById(2);
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error al obtener el repartidor solicitado:", error);
      }
    };
    fetchUser();
  }, []);

  const handleSwitchChange = async () => {
    try {
      if (isChecked) {
        await updateUser(2, { status: "Disabled" });
        setIsChecked(false);
        setUserStatus("Disabled");
      } else {
        await updateUser(2, { status: "Free" });
        setIsChecked(true);
        setUserStatus("Free");
      }
    } catch (error) {
      console.error("Error al cambiar el estado del repartidor:", error);
    }
  };

  // const changeUserStatus = async () => {
  //   try{
  //     if(user?.status === "Free"){
  //       updateUser(2,  { status: "Disabled" })
  //     } else if(user?.status === "Disabled"){
  //       updateUser(2,  { status: "Free" })
  //     }
  //   } catch(error){
  //     console.error("Error al cambiar el estado del repartidor:", error)
  //   }
  // }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "3.5rem",
      }}
    >
      <div className="headerBoxProfile">
        <ArrowBack onClick={handleBackButton} />
        <div style={{ margin: "auto" }}>
          <h1 className="title">Perfil del repartidor</h1>
        </div>
      </div>
      <div className="boxDeliveryProfileStyle">
        <div style={{ width: "25%" }}>
          <Image
            src={deliveryProfileImage}
            alt="Profile-Image"
            width={56}
            height={56}
            style={{
              borderRadius: "50%",
              margin: "",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            marginLeft: "15px",
          }}
        >
          <h1 className="deliveryName">{`${user?.name} ${user?.last_name}`}</h1>
          <span
            style={{
              width: "fit-content",
              height: "15px",
              borderRadius: "20px",
              color: "#3D1DF3",
              fontSize: "10px",
              fontWeight: "600",
              textTransform: "uppercase",
              padding: "0 10px",
              textAlign: "center",
            }}
            className={user?.status === "Free" ? "free" : "disabled"}
          >
            {user?.status === "Free" ? "Habilitado" : "Deshabilitado"}
          </span>
        </div>
        <label className="switch" style={{ right: "0", top: "18px" }}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleSwitchChange}
          />
          <span className="slider"></span>
        </label>
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px"}}>
        <PendingDeliveries onClick={handleAccordionClick} />
        <DeliveriesHistory onClick={handleAccordionClick} />
      </div>
    </div>
  );
};
export default DeliveryProfile;
