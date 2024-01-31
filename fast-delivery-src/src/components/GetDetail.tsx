"use client";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css";
import "@/styles/buttons.css";
import "@/styles/getPackages.css";
import { useRouter } from "next/navigation";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

function GetDetail() {
  const router = useRouter();

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "2rem"}}
      className="boxGetDetail"
    >
      <div className="boxGetDetailStyle">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 className="boxDetail">Detalles</h1>
          <h1 className="boxGetDetailDate">03/01/23</h1>
        </div>

        <hr className="box-dotted-line-Detail" />
        <div>
          
            <CircularProgress
              value={40}
              color="green.400"
            >
              <CircularProgressLabel>0%</CircularProgressLabel>
            </CircularProgress>
        </div>
        <hr className="box-dotted-line-Detail" />
        <div>
          
          <CircularProgress
            value={40}
            color="green.400"
          >
            <CircularProgressLabel>0%</CircularProgressLabel>
          </CircularProgress>
      </div>
      </div>
    </div>
  );
}

export default GetDetail;
