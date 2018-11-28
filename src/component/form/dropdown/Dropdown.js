import React from 'react'
import { MenuItem, DropdownButton } from 'react-bootstrap';
import './Dropdown.scss'
const uuid = require('uuid/v4');

export default class Dropdown extends React.PureComponent {

  state = {
    selectedItem: this.props.initialValue
  };

  onChange = (value) => {
    const { onSelect } = this.props;
    console.log('value', value)
    this.setState({ selectedItem: value}, () => onSelect(value))
  };

  render() {
    const { options, value } = this.props;
    const optionList = options.map(item => (<MenuItem eventKey={item.value}
                                                      active={item.value === value}>{item.label}</MenuItem>));
    return <DropdownButton
      onSelect={this.onChange}
      bsStyle='default'
      title={this.state.selectedItem}
      id={`dropdown-${uuid()}`}>{optionList}</DropdownButton>
  };

}
