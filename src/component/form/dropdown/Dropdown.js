import React from 'react'
import { SplitButton, MenuItem, DropdownButton } from 'react-bootstrap';
import './Dropdown.scss'
const uuid = require('uuid/v4');

const Dropdown = ({ options, value }) => {
  const optionList = options.map(item => (<MenuItem eventKey={item.value}
                                                    active={item.value === value}>{item.label}</MenuItem>));
  return <DropdownButton
    bsStyle='default'
    title='Choose an option'
    id={`dropdown-${uuid()}`}>{optionList}</DropdownButton>
};

export default Dropdown;