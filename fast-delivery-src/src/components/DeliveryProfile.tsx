import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "../styles/box.css"
import "../styles/input.css"
import "../styles/buttons.css"

const DeliveryProfile = () => {
    return (
        <div style={{
            display: "flex", flexDirection:"column", marginTop:"3.5rem"}}>

            <div className="headerbox">
                <IoArrowBackCircleOutline className="arrowIcon"/>
            </div>
            <div style={{margin:"auto"}}>
                <h1 className="title">Perfil del repatidor</h1>
            </div>
            <div className="boxDeliveryProfileStyle">
                <img src="" alt="" style={{
                    width:"56px", borderRadius:"50%", margin:"15px"
                }}/>
                <div style={{ display:"flex", flexDirection:"column"}}>
                    <h1 style={{fontSize:"14px", fontWeight:"700", color:"#3D1DF3"}}>Hernán Ortiz</h1>
                    <span style={
                        {padding:"10px", backgroundColor:"#C7FFB1", borderRadius:"999px",
                    color:"#3D1DF3"}
                    }>HABILITADO</span>
                </div>
                <span style={{borderRadius:"999px", border:"solid 1px #3D1DF3", height:"19px", width:"35px"}}>
                    <span style={{backgroundColor:"#00EA77", height:"15px", borderRadius:"50%", alignItems:"end"}}>
                        
                    </span>
                </span>
            </div>  
        </div>
        
    )
}
export default DeliveryProfile;