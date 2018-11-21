import React from 'react'
import './LoginPage.scss'
import LoginForm from '../../component/form/LoginForm'
import * as loginActions from '../../redux/login/loginActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LoginPage extends React.Component {

  onSubmit = ( e, ...rest ) => {
    if(e) e.preventDefault();
    console.log("submit", e, e.target.value)
  };

  render() {
    return (<div className="login-page">
      <LoginForm onSubmit={this.onSubmit}/>
    </div>);
  }

}

function stateToProps(state) {
  console.log('token', state.loginReducer.token);
  return {
  }
}

function dispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...loginActions})
  }
}

export default connect(stateToProps, dispatchToProps)(LoginPage)