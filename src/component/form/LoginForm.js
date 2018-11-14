import React from 'react'
import 'loginForm.scss'

const LoginForm = ({ onSubmit }) => {
  return (<form className="login-form">
      <label>
        Username
        <input type="text" name="username" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginForm;