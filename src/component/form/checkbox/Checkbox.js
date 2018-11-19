import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ name, value, label, className }) => {
  return (<div className={className ? `checkbox ${className}` : 'checkbox'}>
    <label className="checkbox-label">
      {label}
      <input className="checkbox-input" type="checkbox" name={name}/>
      <span className="outer-span">
        <span className="inner-span"></span>
      </span>
    </label>
  </div>);
};

export default Checkbox;