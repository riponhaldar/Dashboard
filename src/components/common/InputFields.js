import React from "react";

export const Input = ({ name, type, placeholder, label, value, onChange }) => {
  return (
    <div className="input__container  ">
      <label className="input__label">{label}</label>
      <input
        autoComplete="new-password"
        type={type}
        name={name}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        className="input_single  "
      />
    </div>
  );
};
