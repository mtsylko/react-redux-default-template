import React from 'react'
import TextInput from './input/TextInput';
import FormGroup from './FormGroup'

export default class Form extends React.PureComponent {

  state = {
    values: {},
    errors: {}
  };

  onChangeDefault = (e) => {
    const name = e.target.name;
/*
    const typeSplitIndex = name.indexOf(':');
    const type = typeSplitIndex > - 1 ? name.substr(typeSplitIndex + 1) : 'object';
    const pathStr = typeSplitIndex > - 1 ? name.substr(0, typeSplitIndex - 1) : name;
    const path = pathStr.split('.');
    */

    const value = e.target.value;
    const values = { ...this.state.values };
    values[name] = value;
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
    if(item.type === TextInput && !item.props.onChange) {
      config = { onChange: onChangeDefault };
      if(name) config.name = name + '.' + item.props.name;
    }
    return React.cloneElement(item, config);
  }

   getFields(element, name, elements = []) {
    if (element) {
      if (Array.isArray(element)) {
        const len = element.length;
        for(let i = 0; i < len; i++) {
          this.getFields(element[i], name, elements);
        }
      } else {
        if(element.type === TextInput) {
          const elementClone = this.createElementWithProps(element, name);
          elements.push(elementClone);
        } else if(element.type === FormGroup) {
          this.getFields(element.props.children, name ? name + '.' + element.name : element.name, elements);
        }
      }
    }
    return elements;
  }


  render() {
    //const elements = this.getFields.call(this, this.props.children);
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