import React, { ChangeEvent } from "react";

interface IProps {
  name: string;
  value: string;
  loading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  placeholder: string;
}

const CustomTextInput: React.FC<IProps> = ({
  name,
  value,
  loading,
  onChange,
  label,
  type,
  placeholder,
}) => {
  return (
    <>
      <label className="lmb-5">{label}</label>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={(e) => onChange(e)}
        value={value}
        disabled={loading}
        className="event-input"
        required
      />
    </>
  );
};

export default CustomTextInput;
