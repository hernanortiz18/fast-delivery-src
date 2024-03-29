import React, { useState } from "react";
import "../styles/checkboxPackage.css";
import { PackageProps } from "../../types";

function CheckboxPackage(props: PackageProps) {
  const [tick, setTick] = useState(false);
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTick(e.target.checked);
    if (e.target.checked) {
      const tickedArr = props.tickedPackages;
      tickedArr.push(props.id);
      props.setTickedPackages(tickedArr);
    } else {
      const tickedArr = props.tickedPackages;
      const filteredArr = tickedArr.filter((id) => id !== props.id);
      props.setTickedPackages(filteredArr);
    }
  };

  const handleClick = () => {

  }
  return (
    <div className="box-rectangle"  style={{cursor: "pointer"}}>
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="input-checkbox"
          onChange={handleCheckbox}
          checked={tick}
          style={{cursor: "pointer"}}
        />
      </div>
      <div onClick={props.onClick} style={{width: "100%"}}>
        <h2 className="box-content">{props.address},</h2>
        <h2 className="box-content">{props.city}</h2>
      </div>
    </div>
  );
}

export default CheckboxPackage;
