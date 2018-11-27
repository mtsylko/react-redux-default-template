import React from 'react'
import './Grid.scss'

const Header = ({ columns, sort }) => {
  return (
    <thead>
    <tr key="header" className="">
      {columns.map((column, index) => {
        return <th key={`${column.name || index}`}>{column.title}</th>
      })}
    </tr>
    </thead>);
};

export default Header;