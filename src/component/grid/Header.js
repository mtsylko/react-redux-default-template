import React from 'react'
import './Grid.scss'

const Header = ({ columns,sort }) => {
  return (<tr className="header">
    {columns.map(column => {
      return <th onClick={sort}>{column.title}</th>
    })}
  </tr>);
};

export default Header;