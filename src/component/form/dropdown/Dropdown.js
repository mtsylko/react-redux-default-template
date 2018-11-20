import React from 'react'
import { SplitButton, MenuItem } from 'react-bootstrap';
import './Dropdown.scss'
const uuid = require('uuid/v4');


const Dropdown = ({ options, value }) => {
  const optionList = options.map(item => (<MenuItem key={item.value}
                                                    eventKey={item.value}
                                                    active={item.value === value}>{item.label}</MenuItem>));
  return (<SplitButton
    bsStyle='default'
    title='Choose an option'
    id={`dropdown-${uuid()}`}
    key={value}>{optionList}</SplitButton>);
};

export default Dropdown;