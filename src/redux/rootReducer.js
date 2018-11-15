import { combineReducers } from 'redux'
import todoList from './todo-list/TodoListReducer'

const rootReducer = combineReducers({
  todoList
});

export default rootReducer;

