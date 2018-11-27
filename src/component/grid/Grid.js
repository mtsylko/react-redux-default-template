import React, { Component } from 'react'
import Header from './Header'
import Row from './Row'
import PropTypes from 'prop-types';
import { Table, Pagination } from 'react-bootstrap'
import './Grid.scss'


function InvalidPropertyException(message) {
  this.message = message;
  this.name = 'Grid exception';
}

export default class Grid extends Component {

  state = {
    pagination : {
      size: 10,
      page: 1
    }
  };

  constructor(props) {
    super(props);
    const { columns } = props;
    if(!columns || !Array.isArray(columns)) {
      throw new InvalidPropertyException("Pass a valid array as columns");
    }
  }

  onPageSelected = (...args) => {
    console.log(args)
  };


  renderPagination = () => {
    let items = [];
    const { page } = this.state.pagination;
    for (let number = 1; number <= 10; number++) {
      items.push(
        <Pagination.Item active={page === number}>{number}</Pagination.Item>
      );
    }
    return <Pagination onSelect={this.onPageSelected} bsSize="medium">{items}</Pagination>
  };

  render() {
    const { dataSource , columns } = this.props;
    const { renderPagination } = this;
    return (<div className="grid">
      <Table bordered>
        <Header columns={columns}/>
        <tbody>{dataSource.map((item, index) => {
          return <Row id={item.id || index} dataSource={item} columns={columns}/>
        })}</tbody>
      </Table>
      {renderPagination()}
    </div>);
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