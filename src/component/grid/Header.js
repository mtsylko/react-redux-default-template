import React from 'react'
import './Grid.scss'

const Header = ({ columns }) => {
  return (<tr className="header">
    {columns.map(column => {
      return <th>{column.title}</th>
    })}
  </tr>);
};

export default Header;