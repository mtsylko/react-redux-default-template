import React from 'react'
import Grid from '../../component/grid/Grid'
import './AboutPage.scss'

const COLUMNS = [
  {
    name: 'firstname',
    title: 'Firstname'
  },
  {
    name: 'surname',
    title: 'Surnamename'
  }

];

const dataSource = [
  {
    firstname: 'Lisa',
    surname: 'Edelstein'
  },
  {
    firstname: 'Peter',
    surname: 'Pan'
  }
];

export default class AboutPage extends React.Component {

  render() {
    return <div className="about-page">
      {/* <pre>
        This template was created by Maxim Tsylko.
        You can use it freely but don't forget to mention the author.
      </pre> */}
      <Grid columns={COLUMNS} dataSource={dataSource}/>
    </div>
  }

}