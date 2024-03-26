import React from "react";
import "@/styles/notFound.css";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <div className="codeContainer">
        <h1 className="code">404</h1>
      </div>
      <p className="message">This page could not be found.</p>
    </div>
  );
}

export default NotFound;
