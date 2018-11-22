import React from 'react'
import TextInput from '../input/TextInput'
import Form from '../Form'
import Button from '../button/Button'
import { Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import './LoginForm.scss'

const LoginForm = ({ onSubmit }) => {

  return (<Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Sign In</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <Form onSubmit={ onSubmit }>
        <FormGroup>
          <TextInput key={1} name="username" label="Username" />
          <TextInput key={2} name="password" label="Password" type='password' />
          <Button type="submit" label="Sign In"/>
        </FormGroup>
      </Form>
    </Panel.Body>
  </Panel>);
};

export default LoginForm;

