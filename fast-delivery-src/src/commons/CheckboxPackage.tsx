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

<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.42853 4.68572L4.04077 7.42858L10.5714 0.571432" stroke="#3D1DF3" stroke-linecap="round" stroke-linejoin="round" />
</svg>


export default CheckboxPackage