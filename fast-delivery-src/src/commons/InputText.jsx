import React from "react";
import "../styles/input.css";

function InputText({
  className,
  placeholder,
  name,
  value = "",
  onChange,
  disabled = false,
  type = "text",
}) {
  const handleChange = (e) => {
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
