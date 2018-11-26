import React from 'react'
import './ProfilePage.scss'
// import {bindActionCreators} from "redux";
// import * as loginActions from "../../redux/login/loginActions";
import connect from "react-redux/es/connect/connect";

class ProfilePage extends React.Component {

  render(){
    return (<div className="profile-page">

    </div>);
  }

}


function stateToProps(state) {
  return {}
}

function dispatchToProps(dispatch) {
  return {}
}

export default connect(stateToProps, dispatchToProps)(ProfilePage)