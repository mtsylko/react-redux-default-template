import React from 'react'
import TextInput from './input/TextInput'
// import Form from './Form'
import Button from './button/Button'
import { Panel, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import './LoginForm.scss'

const LoginForm = ({ onSubmit }) => {
  return (<Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">Sign In</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <form onSubmit={ onSubmit }>
        <FormGroup>
          <TextInput name="username" label="Username"/>
          <TextInput name="password" label="Password" type='password'/>
          <Button type="submit" label="Sign In"/>
        </FormGroup>
      </form>
    </Panel.Body>
  </Panel>);
};

export default LoginForm;

