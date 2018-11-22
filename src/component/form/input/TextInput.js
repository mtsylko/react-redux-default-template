import React from 'react'
import './TextInput.scss'
import PropTypes from 'prop-types';
import FieldGroup from '../FieldGroup'

const TextInput = ({ name, value, label, placeholder, onChange, type }) => {
  return <FieldGroup
    name={name}
    type={type}
    label={label}
    placeholder={placeholder}
    onChange={onChange}/>
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;

