import React from 'react'
import TextInput from './input/TextInput'
import Radio from './radio/Radio'
import Checkbox from './checkbox/Checkbox'
import RadioGroup from './radio/RadioGroup'
import CheckboxGroup from './checkbox/CheckboxGroup'
import Dropdown from './dropdown/Dropdown'
import _ from 'lodash'

export default class Form extends React.PureComponent {

  static FORM_ELEMENT_TYPES = [
    TextInput,
    Radio,
    Checkbox,
    RadioGroup,
    CheckboxGroup,
    Dropdown
  ];

  state = {
    values: {},
    errors: {}
  };

  onChangeDefault = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const values = _.cloneDeep(this.state.values);
    _.set(values, name, value);
    this.setState({ values }, () => {
      const { values, errors } = this.state;
      const { onModelChange } =  this.props;
      if(onModelChange) onModelChange(values, errors);
    });
  };

  onSubmit = (e) => {
    if(e) e.preventDefault();
    const { values, errors } = this.state;
    const { onSubmit : submit } = this.props;
    submit(values, errors);
  };

  createElementWithProps(item, name) {
    const { onChangeDefault } = this;
    let config = {};
    if(Form.FORM_ELEMENT_TYPES.indexOf(item.type) > -1 && !item.props.onChange) {
      config = { onChange: onChangeDefault };
    }
    return React.cloneElement(item, config);
  }


  render() {
    const { children } = this.props;
    const { createElementWithProps, onSubmit } = this;
    const childrenWithProps = children.map(item => createElementWithProps.call(this, item));
    return <div className="form">
      <form method='POST' onSubmit={ onSubmit }>
        {childrenWithProps}
      </form>
    </div>;
  }


}