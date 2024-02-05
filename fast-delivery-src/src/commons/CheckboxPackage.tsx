import React from 'react'
import "../styles/checkboxPackage.css";

interface CheckboxPackageProps {
    address: string;
    city: string;
}

function CheckboxPackage(props: CheckboxPackageProps) {
    return (
        <div className="box-rectangle">
            <div className="checkbox-container">
                <input type="checkbox" className="input-checkbox" />
            </div>
            <div>
                <h2 className="box-content">{props.address},</h2>
                <h2 className="box-content">{props.city}</h2>
            </div>
        </div>
    )
}



export default CheckboxPackage