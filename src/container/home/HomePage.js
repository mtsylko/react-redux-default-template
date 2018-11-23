import React from 'react'
import './HomePage.scss'
import Dropdown from '../../component/form/dropdown/Dropdown';
import RadioGroup from "../../component/form/radio/RadioGroup";

const OPTIONS = [
  {label: 'Option 1', value: 1},
  {label: 'Option 2', value: 2},
  {label: 'Option 3', value: 3},
  {label: 'Option 4', value: 4}
];

export default class HomePage extends React.Component {

  render() {
    return (<div className="home-page">
      {/*<Dropdown options={OPTIONS} value={2}/>*/}
      <RadioGroup name="radio_group" options={OPTIONS} value={2}/>
    </div>);
  }

}