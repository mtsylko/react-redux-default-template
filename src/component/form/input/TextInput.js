import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './TextInput.scss'

export default class TextInput extends PureComponent {

  render() {
    const { name, value, label, placeholder, onChange, type } = this.props;
    return (<div className="text-input">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={onChange}/>
    </div>);
  }

}

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

