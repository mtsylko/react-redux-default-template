import React from 'react'
import './ProfilePage.scss'
// import {bindActionCreators} from "redux";
// import * as loginActions from "../../redux/login/loginActions";
import { connect } from 'react-redux'
import Form from '../../component/form/Form'
import TextInput from '../../component/form/input/TextInput'
import RadioGroup from '../../component/form/radio/RadioGroup'
import CheckboxGroup from '../../component/form/checkbox/CheckboxGroup'
import Button from '../../component/form/button/Button'
import Dropdown from "../../component/form/dropdown/Dropdown";

class ProfilePage extends React.Component {

  render(){
    return (<div className="profile-page">
      <Form onSubmit={(values) => console.log(values)}>
        <TextInput name="person.firstname" label="Firstname"/>
        <TextInput name="person.surname" label="Surname"/>
        <RadioGroup name="person.gender" label="Gender" options={[{label: 'Male', value: 'M'}, {label: 'Female', value: 'F'}, {label: 'Unknown', value: 'U'}]} />
        <CheckboxGroup name="person.documents"  label="Document" options={[{label: 'Passport', value: 'passport'}, {label: 'Diploma', value: 'diploma'}]}/>
        <Dropdown name="person.country" options={[{label: 'Belarus', value: 'blr'}, {label: 'Germany', value: 'de'}, {label: 'United States', value: 'us'}]} value="us"/>
        <Button name="submit_profile" label="Submit"/>
      </Form>
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