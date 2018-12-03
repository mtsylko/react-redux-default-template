import React, { Component } from 'react'
import './App.scss'
import Header from './Header';
import Main from './Main';


export default class App extends Component {

  render() {
    const isAuth = !!localStorage.getItem('token');
    return (
      <div className="App">
        {isAuth ? <Header/> : null}
        <Main/>
      </div>
    );
  }

}
