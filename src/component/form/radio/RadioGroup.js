import React, { PureComponent }  from 'react'
import PropTypes from 'prop-types';
import Radio from './Radio'
import './Radio.scss'

/*
optionList is an array with the following structure:
[ {label: 'label 1', value: 'option_1'}, ... ,  {label: 'label n', value: 'option_n'} ]
 */
export default class RadioGroup extends PureComponent {

  render() {
    const { name, options, label } = this.props;
    const radioGroup = [];
    options.forEach(item => {
      radioGroup.push(<Radio name={name}
                             value={item.value}
                             label={item.label}
                             onChange={ this.props.onChange }/>);
    });
    return <div className="radio-group">
      {label ? <label className="group-label">{label}</label> : null}
      {radioGroup}
    </div>
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
