import React from "react";
import "@/styles/buttons.css";

function page() {
  return (
    <div>
      <button className="greenButton">Green Button</button>
      <button className="transparentButton1">Transparent Button 1</button>
      <div
        style={{
          backgroundColor: "white",
          height: "4rem",
          width: "fit-content",
          padding: "1rem",
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <button className="transparentButton2">Transparent Button 2</button>
        <button className="link2">Link 2</button>
      </div>
      <button className="link1">Link 1</button>
    </div>
  );
}

export default page;
