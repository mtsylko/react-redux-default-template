import React from 'react'
import './Button.scss'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

const WrappedButton = ({ label, type, onClickHandler }) => {
  return <Button bsStyle="primary" type={type} onClick={ onClickHandler }>{label}</Button>
};

WrappedButton.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClickHandler: PropTypes.func
};

export default WrappedButton;