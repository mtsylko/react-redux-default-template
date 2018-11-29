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


  render() {
    const { dataSource , columns } = this.props;
    const { pagination : { page, size } } = this.state;
    const numberOfPages = Math.ceil(dataSource.length / size);
    const { onPageChange, onPageSizeChange } = this;
    return (<div className="grid">
      <table>
        <Header columns={columns}/>
        <tbody>{dataSource.map((item, index) => {
          return <Row id={item.id || index} dataSource={item} columns={columns}/>
        }).slice((page - 1) * size, page * size)}</tbody>
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