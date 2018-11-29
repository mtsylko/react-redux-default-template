import React from 'react'
import './Pagination.scss'
import _ from 'underscore'

const Item = ({ pageNumber, isActive, onChoosePage }) => {
  return <a href='#' onClick={e => onChoosePage(e, pageNumber)} className={`item ${isActive ? 'active' : ''}`}><div className="number">{pageNumber}</div></a>
};

export default class Pagination extends React.PureComponent  {

  constructor(props) {
    super(props);
    const visibleFrom = 1;
    const visibleTo = Math.min(props.numberOfPages, 10);
    this.state = {
      range: {
        from: visibleFrom,
        to: visibleTo
      }
    };
  }

  onChoosePage = (e, value) => {
    if(e) e.preventDefault();
    const { onPageChange } = this.props;
    onPageChange(value)
  };

  componentDidUpdate(prevProps) {
    const { activePage: curActivePage, numberOfPages } = this.props;
    const { activePage: prevActivePage } = prevProps;
    if(curActivePage!== prevActivePage) {
      const rangeIndex = Math.ceil(curActivePage / 10);
      const visibleFrom = (rangeIndex - 1) * 10;
      const visibleTo = Math.min(numberOfPages, rangeIndex * 10);
      if(curActivePage >= visibleFrom && curActivePage <= visibleFrom){
        const state = _.clone(this.state);
        state.range = { from: visibleFrom, to: visibleTo };
        this.setState(state);

      }
    }
  }

  onLeftShift = (e) => {
    if(e) e.preventDefault();
    const { range : { from, to } } = this.state;
    if(from - 1 > 0) {
      this.setState({range: {from: from - 1, to: to - 1}});
    }
  };

  onRightShift = (e) => {
    if(e) e.preventDefault();
    const { numberOfPages } = this.props;
    const { range : { from, to } } = this.state;
    if(to + 1 <= numberOfPages) {
      this.setState({range: {from: from + 1, to: to + 1}});
    }
  };

  render() {

    const { onLeftShift, onRightShift } = this;
    const { range } = this.state;
    const { activePage } = this.props;
    const pages = [];

    let current = range.from;
    const last = range.to;
    while(current <=  last) {
      pages.push(current);
      current++;
    }

    return (
      <div className="pagination">
        <a className="left-nav-arrow" href='#' onClick={(e) => onLeftShift(e)}><img className="gray-filter" src={require('../icons/chevron-left-2x.png')} alt=''/></a>
        {pages.map(page => <Item pageNumber={page} onChoosePage={this.onChoosePage} isActive={activePage === page}/>)}
        <a className="right-nav-arrow" href='#' onClick={(e) => onRightShift(e)}><img className="gray-filter" src={require('../icons/chevron-right-2x.png')} alt=''/></a>
      </div>
    );
  }

}