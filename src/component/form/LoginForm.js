import React from 'react'
import './LoginForm.scss'

const LoginForm = ({ onSubmit }) => {
  return (<form className="login-form" method='POST' onSubmit={ onSubmit }>
      <label style={{display: 'block', marginBottom: 10}}>
        Username
        <input style={{float: 'right', marginLeft: 5}} type="text" name="username" />
      </label>
      <label style={{display: 'block', marginBottom: 10}}>
        Password
        <input  style={{float: 'right', marginLeft: 5}} type="password" name="password" />
      </label>
      <input style={{float: 'right'}} type="submit" value="Submit" />
    </form>
  );
};

export default LoginForm;