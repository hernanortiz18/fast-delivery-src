import React from 'react'
import '@/styles/box.css'

type DeliveryMapInfoProps ={
  address: string | undefined,
  package_code:  undefined | number,
  client_name: string | undefined,
  city: string | undefined
}

function DeliveryMapInfo({address, package_code, client_name, city}: DeliveryMapInfoProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="deliveryMapInfo">
            <p className="infoP" style={{ fontWeight: "bolder" }}>
              Destino: ​
            </p>
            <p className="infoP">{address}</p>
          </div>
          <div className="deliveryMapInfo">
            <p className="infoP" style={{ fontWeight: "bolder" }}>
              Número de paquete: ​
            </p>
            <p className="infoP">#{package_code}</p>
          </div>
          <div className="deliveryMapInfo">
            <p className="infoP" style={{ fontWeight: "bolder" }}>
              Recibe: ​
            </p>
            <p className="infoP">{client_name}</p>
          </div>
        </div>
  )
}

export default DeliveryMapInfo