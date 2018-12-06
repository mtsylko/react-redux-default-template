import React from 'react'
import TextInput from '../input/TextInput'
import Form from '../Form'
import Button from '../button/Button'
import { Panel } from 'react-bootstrap'
import './LoginForm.scss'

const LoginForm = ({ onSubmit }) => {

  return (<div className="login-form">
    <Panel bsStyle="primary">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Sign In</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <Form onSubmit={ onSubmit }>
          <TextInput key={1} name="username" label="Username" />
          <TextInput key={2} name="password" label="Password" type='password' />
          <Button type="submit" label="Sign In"/>
        </Form>
      </Panel.Body>
    </Panel>
  </div>);
};



export default LoginForm;

