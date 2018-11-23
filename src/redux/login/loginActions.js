import ActionTypes from '../actionTypes'
import loginDao from '../../dao/login/loginDao'

const {
  LOGIN_REQUEST_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGIN_ERROR_ACTION
} = ActionTypes;

export function login(credentials) {
  return dispatch => {
    dispatch({type: LOGIN_REQUEST_ACTION, payload: { isFetching: true } });
    loginDao.fakeLogin(credentials).then(response => {
      const { token } = response;
      dispatch({ type: LOGIN_SUCCESS_ACTION, payload: { isFetching: false,  token } });
    }).catch(response => {
      dispatch({ type: LOGIN_ERROR_ACTION, payload: { isFetching: false,  token: null, error: response.message } });
    });
  }
}