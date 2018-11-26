import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { logout } from '../../redux/logout/logoutActions'
import { Redirect } from 'react-router-dom'

class LogoutComponent extends React.Component {

  componentWillMount () {
    this.props.dispatch(logout());
  }

  render(){
    return <Redirect to="/login" />
  }

}

export default withRouter(connect()(LogoutComponent))
