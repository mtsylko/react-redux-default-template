import ActionTypes from '../actionTypes'

const { LOGOUT_ACTION } = ActionTypes;

export default function logoutReducer(state = {}, action) {
  switch (action.type) {
    case LOGOUT_ACTION:
      localStorage.setItem('token', '');
      return state;
    default:
      return state;
  }
}