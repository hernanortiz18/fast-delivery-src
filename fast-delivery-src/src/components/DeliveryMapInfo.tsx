import React from 'react'
import '@/styles/box.css'

type DeliveryMapInfoProps ={
  packageDirection: string
  packageCode: string
  clientName: string
}

function DeliveryMapInfo({packageDirection, packageCode, clientName}: DeliveryMapInfoProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="deliveryMapInfo">
            <p className="infoP" style={{ fontWeight: "bolder" }}>
              Destino: ​
            </p>
            <p className="infoP">{packageDirection},</p>
          </div>
          <div className="deliveryMapInfo">
            <p className="infoP" style={{ fontWeight: "bolder" }}>
              Número de paquete: ​
            </p>
            <p className="infoP">#{packageCode}</p>
          </div>
          <div className="deliveryMapInfo">
            <p className="infoP" style={{ fontWeight: "bolder" }}>
              Recibe: ​
            </p>
            <p className="infoP">{clientName}</p>
          </div>
        </div>
  )
}

export default DeliveryMapInfo