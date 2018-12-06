import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types';

const Button = ({ name, label, type, onClickHandler }) => {
  return <button className="button" type={type} name={name} onClick={ onClickHandler }>{label}</button>
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClickHandler: PropTypes.func
};

Button.defaultProps = {
  type: 'submit'
};

export default Button;