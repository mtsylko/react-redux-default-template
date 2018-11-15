import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.scss'
import Header from './Header';
import Main from './Main';

/*
function mapStateToProps(state) {
  return {
    list: state.todoList.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTodoList }, dispatch)
  }
} */

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }

}
