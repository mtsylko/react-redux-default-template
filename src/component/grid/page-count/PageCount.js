import React from 'react'
import './PageCount.scss'

export default class PageCount extends React.PureComponent {

  onPageChange = (e) => {
    if(e) e.preventDefault();
    const value = e.target.value;
    const maxPage = this.props.maxPage;
    const currentPage = Math.max(1, Math.min(value, maxPage));
    this.props.onPageChange(currentPage);
  };

  render() {
    return <div className="page-count">
      <input type="number" name="currentPage" value={this.props.activePage} onChange={this.onPageChange}/> <span className="max">out of {this.props.maxPage}</span>
    </div>
  }

}