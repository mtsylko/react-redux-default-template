import { combineReducers } from 'redux'
import login from './login/loginReducer'
import logout from './logout/logoutReducer'

const rootReducer = combineReducers({
  login,
  logout
});

export default rootReducer;

