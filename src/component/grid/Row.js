import React from 'react'
import './Grid.scss'

const Row = ({ id, dataSource, columns }) => {
  return (<tr key={id}>
    {columns.map((column, index) => {
      return <td key={`${id}_${column.name || index}`}>{dataSource[column.name]}</td>
    })}
  </tr>);
};

export default Row;