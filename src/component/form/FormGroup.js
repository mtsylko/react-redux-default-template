import React, { PureComponent } from 'react'
import './Form.scss'
import PropTypes from 'prop-types';

export default class FormGroup extends PureComponent {

  render() {
    const { children } = this.props;
    return (
      <div className="form-group">
        {children}
      </div>
    );
  }

}

FormGroup.propTypes = {
  name: PropTypes.string.isRequired
};