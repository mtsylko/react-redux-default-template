import React from 'react'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
const uuid = require('uuid/v4');

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={`input-${uuid()}`}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

export default FieldGroup;