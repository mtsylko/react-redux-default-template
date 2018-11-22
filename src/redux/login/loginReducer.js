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
      return state.setIn(['form', 'isFetching'], false).setIn(['form', 'token'], action.payload.token);
    case LOGIN_ERROR_ACTION:
      return state.setIn(['form', 'isFetching'], false).setIn(['form', 'token'], null);
    default:
      return state;
  }

}