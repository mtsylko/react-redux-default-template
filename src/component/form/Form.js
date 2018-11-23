import React from 'react'
import TextInput from './input/TextInput';

export default class Form extends React.Component {

  state = {
    values: {},
    errors: {}
  };

  onChangeDefault = (e) => {
      const name = e.target.name;
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

  createElementWithProps(item) {
    const { onChangeDefault } = this;
    let config = {};
    if(item.type === TextInput && !item.props.onChange) {
      config = { onChange: onChangeDefault };
    }
    return React.cloneElement(item, config);
  }

  getFields(parent) {
    if(!parent.props) return [];
    const { children } = parent.props;
    if(children && Array.isArray(children)) {
      return children
    }
    return this.getFields(children);
  };

  render() {
    // const children = this.getFields(this);
    const { children } = this.props;
    const { createElementWithProps, onSubmit } = this;
    const childrenWithProps = children.map(item => createElementWithProps.call(this, item));
    return <form method='POST' onSubmit={ onSubmit }>
      {childrenWithProps}
    </form>;
  }


}