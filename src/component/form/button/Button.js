import React from 'react'
import './Button.scss'

const Button = ({ value }) => {
  return <input className="btn styled-btn" type="button" value={value}/>
};

export default Button;