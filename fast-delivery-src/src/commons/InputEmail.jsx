import React from "react";
import "../styles/input.css";
import UserIcon from "@/components/UserIcon";

function InputEmail({
  placeholder,
  name,
  value = "",
  onChange,
  disabled = false,
}) {
  const handleChange = (e) => {
    if (onChange) onChange(e);
  };
  return (
    <div className="input-container">
      <span className="icon-container">
        <UserIcon />
      </span>
      <input
        placeholder={placeholder}
        name={name}
        type="email"
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputEmail;
