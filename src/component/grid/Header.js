import React from 'react'
import './Grid.scss'

const Header = ({ columns, sort }) => {
  return (<tr className="">
    {columns.map(column => {
      return <th>{column.title}</th>
    })}
  </tr>);
};

export default Header;