import initialState from './todoListInitialState'
import ActionTypes from '../actionTypes'

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