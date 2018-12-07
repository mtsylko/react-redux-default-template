import React from 'react'
import PropTypes from 'prop-types';
import './Radio.scss'

const Radio = ({ name, value, label, onChange }) => {
  return <div className="radio-group radio">
    <label htmlFor={name}>{label}</label>
    <input type="radio" name={name} value={value} onChange={onChange} /* checked={isActive} *//>
  </div>
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  isActive: PropTypes.bool
};

Radio.defaultProps = {
  isActive: false
};

export default Radio;
