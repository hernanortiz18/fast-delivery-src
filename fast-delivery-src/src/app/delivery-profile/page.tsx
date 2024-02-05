import Navbar from "@/commons/Navbar";
import DeliveryProfile from "@/components/DeliveryProfile";

import DeliveriesHistory from "@/components/DeliveriesHistory";

import PendingDeliveries from "@/components/PendingDeliveries";

import React from "react";

const page = () => {
    return(
        <>
        <Navbar />
        <div style={{
            display:"flex", flexDirection:"column"
        }}>
        <DeliveryProfile />
        <PendingDeliveries />
        <DeliveriesHistory />
        </div>
        </>

    )
}

export default page