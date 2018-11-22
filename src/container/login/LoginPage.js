import React from 'react'
import './LoginPage.scss'
import LoginForm from '../../component/form/login-form/LoginForm'
import * as loginActions from '../../redux/login/loginActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LoginPage extends React.Component {

  onSubmit = ( values, errors ) => {
    console.log(values, errors);
    this.props.actions.login(values);
  };

  render() {
    return (<div className="login-page">
      <LoginForm onSubmit={this.onSubmit}/>
    </div>);
  }

}

function stateToProps(state) {
  return {
    token: state.login.form.token
  }
}

function dispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...loginActions}, dispatch)
  }
}

export default connect(stateToProps, dispatchToProps)(LoginPage)