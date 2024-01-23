import React, { useState } from "react";
import "../styles/input.css";
import PswVisibleIcon from "@/components/PswVisibleIcon";
import PswNoVisibleIcon from "@/components/PswNoVisibleIcon";

type InputPasswordProps = {
  className: string
  placeholder: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  disabled: boolean
}
function InputPassword({
  className,
  placeholder,
  name,
  value,
  onChange,
  disabled = false,
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              <PswVisibleIcon className={className === "inputBlue" ? "white" : "#3D1DF3"}/>
            </button>
          ) : (
            <button className="showPswBtn" onClick={togglePasswordVisibility}>
              <PswNoVisibleIcon className={className === "inputBlue" ? "white" : "#3D1DF3"}/>
            </button>
          )}
        </span>
      </div>
    </div>
  );
}

export default InputPassword;
