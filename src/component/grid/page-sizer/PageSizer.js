import React from 'react'
import './PageSizer.scss'
import Dropdown from '../../form/dropdown/Dropdown';

export default class PageSizer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      size: this.props.initialSize || 10
    };
  }

  getOptionList() {
    const pageSizes = this.props.availibleSizes || [10, 50, 100, 200];
    return pageSizes.map(item => ({ label: item.toString(), value: item }));
  }

  render() {
    return (
      <div className="page-sizer">
        <Dropdown pullRight options={this.getOptionList()} initialValue={this.state.size} onSelect={this.props.onSelect}/>
      </div>
    );
  }

}