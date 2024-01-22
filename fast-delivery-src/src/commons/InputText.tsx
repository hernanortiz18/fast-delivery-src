import React from "react";
import "../styles/input.css";

type InputTextProps = {
  className: string
  placeholder: string
  name: string
  value: string
  onChange:  React.ChangeEventHandler<HTMLInputElement>
  disabled: boolean
  type: string
}
function InputText({
  className,
  placeholder,
  name,
  value = "",
  onChange,
  disabled = false,
  type = "text",
}: InputTextProps) {
  const handleChange =  (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (type === "tel") {
      const newValue = e.target.value;
      if (/^\d*$/.test(newValue)) {
        onChange(e);
      }
    } else {
      onChange(e);
    }
  };
  return (
    <input
      className={className}
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}

export default InputText;
