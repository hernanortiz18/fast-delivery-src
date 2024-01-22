import React from "react";
// import "../styles/input.css";

type InputEmailProps = {
  className: string
  placeholder: string
  name: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  disabled: boolean
}
function InputEmail({
  className,
  placeholder,
  name,
  value = "",
  onChange,
  disabled = false,
}: InputEmailProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
