import { combineReducers } from 'redux'
import login from './login/loginReducer'

const rootReducer = combineReducers({
  login
});

export default rootReducer;

