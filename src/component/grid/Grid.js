import React, { Component } from 'react'
import Header from './Header'
import Row from './Row'
import PropTypes from 'prop-types';
import { Table, Pager } from 'react-bootstrap'
import Pagination from './pagination/Pagination'
import './Grid.scss'
import PageSizer from "./page-sizer/PageSizer";


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
    const { pagination }  = this.state;
    const updatedPagination = { ...pagination };
    updatedPagination.size = size;
    this.setState({ pagination: updatedPagination});
  };


  render() {
    const { dataSource , columns } = this.props;
    const { pagination : { page, size } } = this.state;
    const numberOfPages = Math.ceil(dataSource.length / size);
    console.log('size', size)
    const { onPageChange, onPageSizeChange } = this;
    return (<div className="grid">
      <Table bordered>
        <Header columns={columns}/>
        <tbody>{dataSource.map((item, index) => {
          return <Row id={item.id || index} dataSource={item} columns={columns}/>
        }).slice((page- 1) * size, page * size)}</tbody>
      </Table>
      <Pagination numberOfPages={numberOfPages} onPageChange={onPageChange}/>
      <PageSizer onSelect={onPageSizeChange}/>
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