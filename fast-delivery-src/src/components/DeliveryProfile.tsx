import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css"
import "../styles/switch.css"
import "../styles/buttons.css"


const DeliveryProfile = () => {
    return (
        <div style={{
            display: "flex", flexDirection:"column", marginTop:"3.5rem"}}>

            <div className="headerBox">
                <IoArrowBackCircleOutline className="arrowIcon"/>
            <div style={{margin:"auto"}}>
                <h1 className="title">Perfil del repatidor</h1>
            </div>
            </div>
            <div className="boxDeliveryProfileStyle">
                <div style={{width:"25%"}}>

                <img src="../assets/delivery-profile.jpeg" alt="Profile-Image" style={{
                    width:"56px",
                    height:"56px" ,borderRadius:"50%", margin:"0 5px 10px 10px"
                }}/>
                </div>
                <div style={{ display:"flex", flexDirection:"column", width:"80%"}}>
                    <h1 style={{fontSize:"14px", fontWeight:"700", color:"#3D1DF3"}}>Hernán Ortiz</h1>
                    <span style={
                        {margin:"5px",backgroundColor:"#C7FFB1", borderRadius:"999px",
                    color:"#3D1DF3", height:"15px",
                    width:"79px", fontSize:"10px", fontWeight:"600", textAlign:"center"}
                    }>HABILITADO</span>
                </div>
                <label className="switch" style={{right:"0"}}>
                    <input type="checkbox"/>
                    <span className="slider"></span>
                </label>
            </div>  
        </div>
        
    )
}
export default DeliveryProfile;