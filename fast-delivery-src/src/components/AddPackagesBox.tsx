"use client";
import InputText from "@/commons/InputText";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css";
import "../styles/input.css";
import "../styles/buttons.css";
import "../styles/addPackages.css";
import { ToastContainer, Zoom, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import InputDatePicker from "@/commons/InputDatePicker";
import ArrowBack from "@/assets/ArrowBack";

function AddPackagesBox() {
  const [formData, setFormData] = useState({
    direction: "",
    receptorName: "",
    packageKg: "",
    deliveryDate: "",
  });

  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  const handleAddPackage = () =>{
    toast.success("Paquete agregado con éxito")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateSelect = (date: Date) => {
    console.log("Fecha seleccionada:", date.toISOString());
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}
    >
      <div className="headerBoxProfile">
        <ArrowBack onClick={handleBackButton} />
        <div style={{ display: "flex", margin: "auto" }}>
          <p className="title">Agregar paquetes</p>
        </div>
      </div>
      <div
        className="boxRegisterStyle"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="formAddPackages">
          <div className="inputsContainer">
            <InputText
              className="inputWhite"
              placeholder="Dirección"
              name="direction"
              value={formData.direction}
              disabled={false}
              onChange={handleChange}
            />
            <InputText
              className="inputWhite"
              placeholder="Nombre de quien recibe"
              name="receptorName"
              value={formData.receptorName}
              disabled={false}
              onChange={handleChange}
            />
            <InputText
              className="inputWhite"
              placeholder="Peso del paquete (Kg)"
              name="packageKg"
              value={formData.packageKg}
              disabled={false}
              onChange={handleChange}
            />
          </div>

          <hr className="box-dotted-line" />
          <h1 className="box-subtitle2">Fecha de entrega</h1>
          <div className="inputsContainer">
            <InputDatePicker
              className="inputWhite"
              placeholder="00/00/00"
              name="deliveryDate"
              onSelectPicker={handleDateSelect}
            />
          </div>
        </div>
        <button
          className="greenButton"
          onClick={handleAddPackage}
          style={{ marginTop: "auto", marginBottom: "10px" }}
        >
          <ToastContainer position="bottom-left" transition={Zoom} autoClose={4000}/>
          Agregar
        </button>
      </div>
    </div>
  );
}

export default AddPackagesBox;
