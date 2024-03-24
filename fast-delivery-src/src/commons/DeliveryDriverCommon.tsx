import React from "react";
import "@/styles/deliveryDrivers.css";
import Link from "next/link";

type DeliveryDriverCommonProps = {
  driverName: string;
  tags: string;
  tagContent: string;
  percentage: React.ReactNode;
  avatar: React.ReactNode;
};

function DeliveryDriverCommon({
  driverName,
  tags,
  tagContent,
  percentage,
  avatar,
}: DeliveryDriverCommonProps) {
  return (
    <div className="driver-container">
      <div className="percentage-name-container">
        {percentage && <div>{percentage}</div>}
        <div className="name-tag-container">
          <Link href="/delivery-profile">
            <p className="name">{driverName}</p>
          </Link>

          <div className={`tags ${tags}`}>{tagContent}</div>
        </div>
      </div>
      {avatar && <div>{avatar}</div>}
    </div>
  );
}

export default DeliveryDriverCommon;
