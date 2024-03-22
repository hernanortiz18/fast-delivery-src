import React from "react";
import "@/styles/homeDelivery.css";
import "@/styles/buttons.css";
import BoxIcon from "@/assets/BoxIcon";

type PackageItemProps = {
  package_code: string;
  address: string;
  city: string;
  tags?: string;
  tagContent?: string;
  additionalElement?: React.ReactNode;
};

function AccordionPackageItem({
  package_code,
  address,
  city,
  tags,
  additionalElement,
  tagContent,
}: PackageItemProps) {
  return (
    <div className="package-item">
      <div className="box-icon-info-container">
        <BoxIcon />
        <div>
          <h1 className="package-code">#{package_code}</h1>
          <h2 className="package-direction">{address},</h2>
          <h2 className="package-direction">{city}</h2>
        </div>
      </div>
      <div className="tags-container">
        <p className={`tags ${tags}`}>{tagContent}</p>
        {additionalElement && <div>{additionalElement}</div>}
      </div>
    </div>
  );
}

export default AccordionPackageItem;
