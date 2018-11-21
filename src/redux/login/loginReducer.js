import ActionTypes from '../actionTypes'
import initialState from './loginInitialState'

const {
  LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGIN_ERROR_ACTION
} = ActionTypes;


export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_ACTION:
      return state.setIn(['isFetching'], true);
    case LOGIN_SUCCESS_ACTION:
      return state.setIn(['isFetching'], false).setIn(['token'], action.payload.token);
    case LOGIN_ERROR_ACTION:
      return state.setIn(['isFetching'], false).setIn(['token'], null);
    default:
      return state;
  }

}