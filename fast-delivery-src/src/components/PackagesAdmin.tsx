"use client"
import React from "react";
import "@/styles/packagesAdmin.css";
import { useRouter } from "next/navigation";
import ArrowBack from "@/assets/ArrowBack";
import BoxIcon from "@/assets/BoxIcon";
import "../styles/init.css";
import TrashIcon from "@/assets/TrashIcon";
import SeeMoreArrow from "@/assets/SeeMoreArrow";

function PackagesAdmin() {
    const router = useRouter();

    const handleBackButton = () => {
        router.back();
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: "3.5rem" }}>
            <div className="header-box">
                <div className="arrow-back">
                    <ArrowBack />
                </div>
                <h1 className="header-box-title">Paquetes</h1>
            </div>
            <div className="white-box">
                <div className="date-container">
                    <div className="month">
                        Enero
                    </div>
                    <div className="calendarDay">
                        <div className="dayName">mie</div>
                        <div className="dayNumber">03</div>
                    </div>
                </div>

                <div className="package-amount">523 paquetes</div>

                <div className="package-item">
                    <div className="box-icon-info-container" >
                        <BoxIcon />
                        <div className="info-container">
                            <h1 className="package-code">#0A235</h1>
                            <h2 className="package-direction">Castillo 1356,<br />CABA</h2>
                        </div>
                    </div>
                    <div className="trash-container" >
                        <TrashIcon />
                    </div>
                </div>

                <div className="package-item">
                    <div className="box-icon-info-container" >
                        <BoxIcon />
                        <div className="info-container">
                            <h1 className="package-code">#0H167</h1>
                            <h2 className="package-direction">Av. Carabobo y Rivadavia,<br />CABA</h2>
                        </div>
                    </div>
                    <div className="trash-container" >
                        <TrashIcon />
                    </div>
                </div>

                <div className="package-item">
                    <div className="box-icon-info-container" >
                        <BoxIcon />
                        <div className="info-container">
                            <h1 className="package-code">#0H166</h1>
                            <h2 className="package-direction">Mendoza 1810,<br />CABA</h2>
                        </div>
                    </div>
                    <div className="trash-container" >
                        <TrashIcon />
                    </div>
                </div>

                <div className="package-item">
                    <div className="box-icon-info-container" >
                        <BoxIcon />
                        <div className="info-container">
                            <h1 className="package-code">#0B540</h1>
                            <h2 className="package-direction">Scalabrini Ortiz 5073,<br />CABA</h2>
                        </div>
                    </div>
                    <div className="trash-container" >
                        <TrashIcon />
                    </div>
                </div>

                <div className="see-more-arrow-container">
                    <SeeMoreArrow />
                </div>

            </div>

        </div>
    );
}

export default PackagesAdmin;
