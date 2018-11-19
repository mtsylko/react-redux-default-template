import React from 'react'
import './TextInput.scss'

const TextInput = ({ name, value, label, onChange, isPassword, className }) => {
  const inputClassName = label ? "text-input" : null;
  const inputElement = <input className={inputClassName} type={isPassword ? "password" : "text"} name={name} value={value} onChange={onChange}/>;
  if(!label) return inputElement;
  return (<div className="text-input-compound">
    <label className="input-label">
      {label}
      {inputElement}
    </label>
  </div>);
};

export default TextInput;