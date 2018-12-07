import React, { PureComponent }  from 'react'
import PropTypes from 'prop-types';
import Checkbox from './Checkbox'
import './Checkbox.scss'

/*
optionList is an array with the following structure:
[ {label: 'label 1', value: 'option_1'}, ... ,  {label: 'label n', value: 'option_n'} ]
 */
export default class CheckboxGroup extends PureComponent {

  render() {
    const { name, options, onChange, label } = this.props;
    const checkboxGroup = [];
    options.forEach((item, index) => {
      checkboxGroup.push(<Checkbox name={`${name}[${index}]`}
                             label={item.label}
                             value={item.value}
                             onChange={ onChange }/>);
    });
    return <div className="checkbox-group">
      {label ? <label className="group-label">{label}</label> : null}
      {checkboxGroup}
    </div>
  }


}

CheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  options: PropTypes.array.isRequired
};

CheckboxGroup.defaultProps = {
  type: 'text'
};
