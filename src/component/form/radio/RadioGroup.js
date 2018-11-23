import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import Radio from './Radio'
import './Radio.scss'

/*
optionList is an array with the following structure:
[ {label: 'label 1', value: 'option_1'}, ... ,  {label: 'label n', value: 'option_n'} ]
 */
export default class RadioGroup extends Component {

  state = {
    selected: []
  };

  onItemSelected = (e) => {
    const value = e.target.value;
    const selected = [ ...this.state.selected ];
    this.props.options.forEach(item => {
      selected[item.value] = false;
    });
    selected[value] = true;
    console.log(selected);
    this.setState({ selected: selected });
  };

  render() {
    const { onItemSelected } = this;
    const { selected } = this.state;
    const { name, options, onSelected } = this.props;
    const radioGroup = [];
    options.forEach(item => {
      radioGroup.push(<Radio name={name}
                             value={item.value}
                             label={item.label}
                             isActive={selected[item.value]}
                             onChange={onItemSelected}
                             onSelected={ onSelected }/>);
    });
    return <div className="radio-group">{radioGroup}</div>
  }


}
RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  options: PropTypes.array.isRequired
};

RadioGroup.defaultProps = {
  type: 'text'
};
