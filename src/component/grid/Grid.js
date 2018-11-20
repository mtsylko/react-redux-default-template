import React, { Component } from 'react'
import Header from './Header'
import Row from './Row'
import './Grid.scss'
import PropTypes from 'prop-types';

function InvalidPropertyException(message) {
  this.message = message;
  this.name = 'Grid exception';
}

export default class Grid extends Component {

  constructor(props) {
    super(props);
    const { columns } = props;
    if(!columns || !Array.isArray(columns)) {
      throw new InvalidPropertyException("Pass a valid array as columns");
    }
  }

  render() {
    const { dataSource , columns } = this.props;
    return (<table className="grid">
      <Header columns={columns}/>
      {dataSource.map(item => {
        return <Row dataSource={item} columns={columns}/>
      })}
    </table>);
  }

}

Grid.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array
};

Grid.defaultProps = {
  columns: [],
  dataSource: []
};