import { Record } from 'immutable'

const LoginForm = Record({
  isFetching: false,
  error: null
});

const LoginInitialState = Record({
  form: new LoginForm(),
  token: null
});

export default LoginInitialState;


