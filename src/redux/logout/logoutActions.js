import ActionTypes from '../actionTypes'

const { LOGOUT_ACTION } = ActionTypes;

export function logout() {
  return {
    type: LOGOUT_ACTION
  }
}