import React, { Component } from 'react'
import Header from './Header'
import Row from './Row'
import PropTypes from 'prop-types';

import Pagination from './pagination/Pagination'
import PageSizer from './page-sizer/PageSizer';
import PageCount from './page-count/PageCount'

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
    },
    sort: {
      columnName: null,
      order: null
    }
  };

  constructor(props) {
    super(props);
    const { columns } = props;
    if(!columns || !Array.isArray(columns)) {
      throw new InvalidPropertyException("Pass a valid array as columns");
    }
  }

  onPageChange = (page) => {
    const { pagination }  = this.state;
    const updatedPagination = { ...pagination };
    updatedPagination.page = page;
    this.setState({ pagination: updatedPagination});
  };

  onPageSizeChange = (size) => {
    this.setState({ pagination: {size, page: 1}});
  };


  onSort = (columnName) => {
    this.setState({ sort: {columnName} });
  };

  applyPagination = (dataSource, page, size) => {
    return dataSource.slice((page - 1) * size, page * size);
  };

  applySorting = (dataSource, columnName) => {
    if(!columnName) return dataSource;
    return dataSource.sort((val1, val2) => {
      if( val1[columnName] === val2[columnName]) return 0;
      return val1[columnName] < val2[columnName] ? -1 : 1;
    });
  };

  render() {
    const { dataSource , columns } = this.props;
    const { pagination : { page, size }, sort: { columnName } } = this.state;

    const numberOfPages = Math.ceil(dataSource.length / size);
    const { onPageChange, onPageSizeChange, onSort, applyPagination, applySorting } = this;
    return (<div className="grid">
      <table>
        <Header columns={columns} onSort={onSort}/>
        <tbody>{applySorting(applyPagination(dataSource, page, size), columnName).map((item, index) => {
          return <Row id={item.id || index} dataSource={item} columns={columns}/>
        })}</tbody>
      </table>
      <div className="page-navigation">
        <Pagination numberOfPages={numberOfPages} activePage={page} onPageChange={onPageChange}/>
        <PageCount maxPage={numberOfPages} activePage={page} onPageChange={onPageChange}/>
        <PageSizer onSelect={onPageSizeChange}/>
      </div>
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