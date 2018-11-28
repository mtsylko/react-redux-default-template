import React from 'react'
import './Pagination.scss'

const Item = ({ pageNumber, isActive, onChoosePage }) => {
  return <a href='#' onClick={e => onChoosePage(e, pageNumber)} className={`item ${isActive ? 'active' : ''}`}>{pageNumber}</a>
};

export default class Pagination extends React.PureComponent {

  state = {
    active: null
  };

  onChoosePage = (e, value) => {
    if(e) e.preventDefault();
    const { onPageChange } = this.props;
    this.setState({ active: value }, () => onPageChange(value));
  };

  render() {

    const { active } = this.state;
    const { numberOfPages } = this.props;
    const pages = [];

    let current = 1;
    while(current <=  numberOfPages) {
      pages.push(current);
      current++;
    }

    return (
      <div className="pagination">
        {pages.map(page => <Item pageNumber={page} onChoosePage={this.onChoosePage} isActive={active === page}/>)}
      </div>
    );
  }

}