import ActionTypes from '../actionTypes'
import InitialState from './loginInitialState'

const {
  LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGIN_ERROR_ACTION
} = ActionTypes;

const initialState = new InitialState();


export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_ACTION:
      return state.setIn(['form', 'isFetching'], true);
    case LOGIN_SUCCESS_ACTION:
      const token = action.payload.token;
      localStorage.setItem('token', token);
      return state.setIn(['form', 'isFetching'], false).setIn(['token'], token);
    case LOGIN_ERROR_ACTION:
      return state.setIn(['form', 'isFetching'], false).setIn(['token'], null);
    default:
      return state;
  }

}