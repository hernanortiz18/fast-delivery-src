import React from "react";
import '@/styles/details.css'

type DetailsElementProps = {
  title: string;
  cantidad: string;
  accion: string;
  percentage: React.ReactNode;
  avatar?: React.ReactNode;
  button: React.ReactNode;
};

function DetailsElement({
  title,
  cantidad,
  accion,
  button,
  percentage,
  avatar,
}: DetailsElementProps) {
  return (
    <div>
       <div className="driver-container">
      <div className="percentage-name-container">
        {percentage && <div>{percentage}</div>}
        <div className="title-quantity-container">
          <p className="title">{title}</p>
          <p className="quantity">{cantidad}{accion}</p>
          <div></div>
        </div>
      </div>
      <div className="button-container">{button && <div>{button}</div>}</div>
    </div>
    <hr className="box-dotted-line2" />
    </div>
   
  );
}

export default DetailsElement;
