import React from "react";
import Avatar from "@/commons/Avatar";

type AdminPresentationProps = {
  adminPic: string
  adminName: string
}

function AdminPresentation({adminPic, adminName}: AdminPresentationProps) {
  return (
    <div className="presentation-container">
      <Avatar
        src={adminPic}
        className="admin-avatar"
      />
      <div className="p-container">
        <p className="hi-admin">¡Hola {adminName}!</p>
        <p className="days-order">Estos son los pedidos del día</p>
      </div>
    </div>
  );
}

export default AdminPresentation;
