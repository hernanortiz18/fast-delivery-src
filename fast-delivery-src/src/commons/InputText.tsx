import React from "react";
import "../styles/input.css";

type InputTextProps = {
  className: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
};
function InputText({
  className,
  placeholder,
  name,
  value = "",
  onChange,
  disabled = false,
}: InputTextProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };
  return (
    <input
      className={className}
      placeholder={placeholder}
      name={name}
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}

export default InputText;
