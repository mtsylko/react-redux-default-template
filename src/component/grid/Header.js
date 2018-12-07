import React from 'react'
import './Grid.scss'

const Header = ({ columns, onSort }) => {

  return (
    <thead>
    <tr key="header" className="">
      {columns.map((column, index) => {
        return <th onClick={() => onSort(column.name)} key={`${column.name || index}`}>{column.title}</th>
      })}
    </tr>
    </thead>);
};

export default Header;