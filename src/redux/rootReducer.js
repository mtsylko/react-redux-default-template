import { combineReducers } from 'redux'
import todoList from './todo-list/todoListReducer'

const rootReducer = combineReducers({
  todoList
});

export default rootReducer;

