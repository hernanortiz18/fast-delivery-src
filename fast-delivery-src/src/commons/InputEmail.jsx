import React from "react";
// import "../styles/input.css";

function InputEmail({
  className,
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
    <input
      className={className}
      placeholder={placeholder}
      name={name}
      type="email"
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}

export default InputEmail;
