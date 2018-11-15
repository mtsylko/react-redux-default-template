import React from 'react'
import './LoginPage.scss'
import LoginForm from '../../component/form/LoginForm'
import * as loginActions from '../../redux/auth/login/LoginActions'

export default class LoginPage extends React.Component {

  onSubmit = ( e, values ) => {
    if(e) e.preventDefault();
    console.log("submit", values)
  };

  render() {
    return (<div className="login-page">
        <LoginForm onSubmit={this.onSubmit}/>
    </div>);
  }

}