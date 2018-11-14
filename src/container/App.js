import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import  { load as loadTodoList } from '../redux/todo-list/todoListActions'
import './App.scss'
import Header from './Header';
import Main from './Main';

function mapStateToProps(state) {
  return {
    list: state.todoList.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadTodoList }, dispatch)
  }
}

class App extends Component {

  componentDidMount() {
    const { loadTodoList } = this.props.actions;
    loadTodoList();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)