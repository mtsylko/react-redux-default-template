import React from 'react'
import { ListItem } from './ListItem.js'
import '../../container/App.scss';

export const List = ({ dataSource }) => {
  const list = [];
  (dataSource || []).forEach(item => {
    list.push(<ListItem className="list" key={item.id} dataSource={item}/>);
  });
  return list;
}