import React from "react";
import "@/styles/statement.css";
import StatementComponent from "@/components/StatementComponent";
import Navbar from "@/commons/Navbar";

function statement() {
  return (
    <div>
      <Navbar />
      <StatementComponent />
    </div>
  );
}

export default statement;
