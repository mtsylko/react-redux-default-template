import React from 'react'
import './Grid.scss'

const Row = ({ dataSource, columns }) => {
  return (<tr className="">
    {columns.map(column => {
      return <td>{dataSource[column.name]}</td>
    })}
  </tr>);
};

export default Row;