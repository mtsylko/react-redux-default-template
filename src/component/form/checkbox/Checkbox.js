import React from 'react'
import './Checkbox.scss'
import PropTypes from 'prop-types';

const Checkbox = ({ name, value, label, className }) => {
  return (<div className={className ? `checkbox ${className}` : 'checkbox'}>
    <label className="checkbox-label">
      {label}
      <input className="checkbox-input" type="checkbox" name={name}/>
      <span className="outer-span">
        <span className="inner-span"/>
      </span>
    </label>
  </div>);
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  label: PropTypes.string
};

export default Checkbox;