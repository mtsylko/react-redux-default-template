import React from 'react'
import './HomePage.scss'
import Dropdown from '../../component/form/dropdown/Dropdown';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

const OPTIONS = [
  {label: 'Option 1', value: 1},
  {label: 'Option 2', value: 2},
  {label: 'Option 3', value: 3},
  {label: 'Option 4', value: 4}
]

export default class HomePage extends React.Component {

  render() {
    return (<div className="home-page">
      <ButtonToolbar>
        {/*<Dropdown options={OPTIONS} value={2}/>*/}
        <DropdownButton
          bsStyle={'success'}
          title={'Success'}
          key={1}
          id={`split-button-basic-1`}
        >
          <MenuItem eventKey="1">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Separated link</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    </div>);
  }

}