import React, { useState } from "react";
import "../styles/input.css";
import PswIcon from "@/components/PswIcon";
import PswVisibleIcon from "@/components/PswVisibleIcon";
import PswNoVisibleIcon from "@/components/PswNoVisibleIcon";

function InputPassword({
  className,
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
        <input
        className={className}
          placeholder={placeholder}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
        <span className="showPswIcon-container">
          {showPassword ? (
            <button className="showPswBtn" onClick={togglePasswordVisibility}>
              <PswVisibleIcon />
            </button>
          ) : (
            <button className="showPswBtn" onClick={togglePasswordVisibility}>
              <PswNoVisibleIcon />
            </button>
          )}
        </span>
      </div>

      {/* <p className="showPswBtn" onClick={togglePasswordVisibility}>
        Show Password
      </p> */}
    </div>
  );
}

export default InputPassword;
