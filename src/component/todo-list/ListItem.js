import React from 'react'
import '../../container/App.scss';

export const ListItem = ({ dataSource }) => {
  return (<div className="list-item">
    {dataSource.text}
  </div>);
}