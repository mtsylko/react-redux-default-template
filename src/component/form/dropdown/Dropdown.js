import React from 'react'
import './Dropdown.scss'

export default class Dropdown extends React.PureComponent {

  render() {
    const { name, value, options, onChange  } = this.props;
    return <div className="dropdown">
      <select name={name} onChange={onChange} value={value}>
        {options.map(item => {
            return <option key={item.value} value={item.value}>{item.label}</option>
        })}
      </select>
    </div>
  }


}
