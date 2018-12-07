import React from 'react'
import './Checkbox.scss'
import PropTypes from 'prop-types';

const Checkbox = ({ name, value, label, className, onChange }) => {
  return (<div className="checkbox-group checkbox">
    <label htmlFor={name}>{label}</label>
    <input type="checkbox" id={name} name={name} value={value} onChange={ onChange }/>
  </div>);
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string
};

export default Checkbox;