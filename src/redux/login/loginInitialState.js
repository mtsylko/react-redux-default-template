import { Record } from 'immutable'

const LoginForm = Record({
  isFetching: false,
  token: null,
  error: null
});

const LoginInitialState = Record({
  form: new LoginForm()
});

export default LoginInitialState;


