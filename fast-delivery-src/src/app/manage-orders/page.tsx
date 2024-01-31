import Navbar from "@/commons/Navbar";
import CalendarComponent from "@/components/CalendarComponent";
import ManageOrdersBox from "@/components/ManageOrdersBox";

import React from "react";

function manageOrders() {
  return (
    <div>
      <Navbar />
      <ManageOrdersBox />
    </div>
  );
}

export default manageOrders;
