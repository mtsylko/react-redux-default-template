import React from 'react'
import TextInput from './input/TextInput'
import Form from './Form'
import Button from './button/Button'
import './LoginForm.scss'

const LoginForm = ({ onSubmit }) => {
  return (<Form onSubmit={onSubmit}>
        <TextInput name="username" label="Username"/>
        <TextInput name="password" label="Password" isPassword/>
        <Button value="Submit" />
      </Form>);
};

export default LoginForm;