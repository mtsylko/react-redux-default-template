import initialState from './TodoListInitialState'
import ActionTypes from '../ActionTypes'

const { LOAD_TODO_LIST } = ActionTypes;

export default function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODO_LIST:
      return state.setIn(['list'], action.payload);
    default:
      break;
  }
  return state;

}