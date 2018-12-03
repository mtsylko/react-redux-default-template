import React from 'react'
import Grid from '../../component/grid/Grid'
import './AboutPage.scss'
import fakeDataSource from './fake_datasource.json'

const COLUMNS = [
  {
    name: 'firstname',
    title: 'Firstname'
  },
  {
    name: 'surname',
    title: 'Surname'
  }

];


export default class AboutPage extends React.Component {

  render() {
    return <div className="about-page">
      {/* <pre>
        This template was created by Maxim Tsylko.
        You can use it freely but don't forget to mention the author.
      </pre> */}
      <Grid columns={COLUMNS} dataSource={fakeDataSource}/>
    </div>
  }

}