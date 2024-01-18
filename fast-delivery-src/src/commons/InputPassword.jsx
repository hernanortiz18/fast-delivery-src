import React, { useState } from "react";
import "../styles/input.css";
import PswIcon from "@/components/PswIcon";

function InputPassword({
  placeholder,
  name,
  value,
  onChange,
  disabled = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    if (onChange) onChange(e);
  };
  return (
    <div>
      <div className="input-container">
        <span className="icon-container">
          <PswIcon />
        </span>
        <input
          placeholder={placeholder}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>

      <p className="showPswBtn" onClick={togglePasswordVisibility}>
        Show Password
      </p>
    </div>
  );
}

export default InputPassword;
