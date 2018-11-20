import React from 'react'
import './TextInput.scss'
import PropTypes from 'prop-types';

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

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  isPassword: PropTypes.bool
};

TextInput.defaultProps = {
  isPassword: false
};

export default TextInput;

