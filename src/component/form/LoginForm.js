import React from 'react'
import TextInput from './input/TextInput'
import Form from './Form'
import Button from './button/Button'
import Checkbox from './checkbox/Checkbox'
import './LoginForm.scss'

const LoginForm = ({ onSubmit }) => {
  return (<Form onSubmit={onSubmit}>
        <TextInput name="username" label="Username"/>
        <TextInput name="password" label="Password" isPassword/>
        <Checkbox className="form align-right" name="remember_me" label="Remember Me" value="remember_me"/>
        <Button value="Submit"/>
      </Form>);
};

export default LoginForm;