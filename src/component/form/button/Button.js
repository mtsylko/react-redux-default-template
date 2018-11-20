import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types';

const Button = ({ value }) => {
  return <input className="btn styled-btn" type="button" value={value}/>
};

Button.propTypes = {
  value: PropTypes.any.isRequired
};

export default Button;